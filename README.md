# DataVisualization_Map_TrafficAccidentInKorea
- 데이터시각화 HW3 - d3.js와 geoJSON을 활용한 한국 교통사고 데이터 맵 그래프 시각화

### Environment
- OS : Windows 10 Pro
- Tool : Visual Studio Code
- Language : html, JavaScript(with d3.js), css

### Data Source 정보
- __도로교통공단_교통사고다발지역.csv__ : 2012년부터 2018년까지의 교통사고 발생 정보 (database : accident)
  https://www.data.go.kr/dataset/15003493/fileData.do
- __지역별인구_및_인구밀도.csv__ : 2014년부터 2018년까지의 지역별인구 및 인구밀도 정보 (database : population)
  http://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1007
- __TL_SCCO_CTPRVN.json__ : 한국의 특별시, 광역시, 특별자치시, 도, 특별자체도 geoJSON 정보
  https://neurowhai.tistory.com/350
- __TL_SCCO_SIG.json__ : 전국 구 지역 단위의 geoJSON 파일 중 대구의 구 geoJSON 정보  
  https://neurowhai.tistory.com/350
  
### 시각화 대상 및 데이터 전처리(mySQL) 정보
- 년도별 지역의 사상자 발생률 (2014년도 ~ 2018년도)
  ```SQL
  SELECT SUM(a.사상자수)/b.2014년도 FROM accident a INNER JOIN population b ON a.도시명 = 지역 WHERE 사고년도 = 2014;
  SELECT SUM(a.사상자수)/b.2015년도 FROM accident a INNER JOIN population b ON a.도시명 = 지역 WHERE 사고년도 = 2015;
  SELECT SUM(a.사상자수)/b.2016년도 FROM accident a INNER JOIN population b ON a.도시명 = 지역 WHERE 사고년도 = 2016;
  SELECT SUM(a.사상자수)/b.2017년도 FROM accident a INNER JOIN population b ON a.도시명 = 지역 WHERE 사고년도 = 2017;
  SELECT SUM(a.사상자수)/b.2018년도 FROM accident a INNER JOIN population b ON a.도시명 = 지역 WHERE 사고년도 = 2018;
  ```
  
- 사고 유형별 대구의 발생 비율 순위 (2014년도 ~ 2018년도)
  ```SQL
    SELECT 사고유형구분, SUM(사상자수) FROM accident WHERE 도시명 = "대구" AND 시도시군구명 LIKE "대구광역시 중구%" GROUP BY 사고유형구분;
    SELECT 사고유형구분, SUM(사상자수) FROM accident WHERE 도시명 = "대구" AND 시도시군구명 LIKE "대구광역시 동구%" GROUP BY 사고유형구분;
    SELECT 사고유형구분, SUM(사상자수) FROM accident WHERE 도시명 = "대구" AND 시도시군구명 LIKE "대구광역시 서구%" GROUP BY 사고유형구분;
    SELECT 사고유형구분, SUM(사상자수) FROM accident WHERE 도시명 = "대구" AND 시도시군구명 LIKE "대구광역시 남구%" GROUP BY 사고유형구분;
    SELECT 사고유형구분, SUM(사상자수) FROM accident WHERE 도시명 = "대구" AND 시도시군구명 LIKE "대구광역시 북구%" GROUP BY 사고유형구분;
    SELECT 사고유형구분, SUM(사상자수) FROM accident WHERE 도시명 = "대구" AND 시도시군구명 LIKE "대구광역시 수성구%" GROUP BY 사고유형구분;
    SELECT 사고유형구분, SUM(사상자수) FROM accident WHERE 도시명 = "대구" AND 시도시군구명 LIKE "대구광역시 달서구%" GROUP BY 사고유형구분;
    SELECT 사고유형구분, SUM(사상자수) FROM accident WHERE 도시명 = "대구" AND 시도시군구명 LIKE "대구광역시 달성군%" GROUP BY 사고유형구분;
  ```
  
### Interaction 정보
- __년도별 지역의 사상자 발생률__ 과 __사고 유형별 대구의 발생 비율 순위__ 맵 그래프에서 라디오 버튼과 체크박스를 통해 데이터를 항목에 맞게 필터링할 수 있습니다.

# Installation
- 이 프로젝트는 웹 기반의 d3.js를 활용하고 있기 때문에 별도의 설치는 필요하지 않습니다.

# Screenshot
### 1. Google Chrome 실행 화면

![크롬](https://user-images.githubusercontent.com/48666975/71656580-1be04300-2d7f-11ea-9913-140ee4da68d1.PNG)

### 2. Microsoft Edge 실행 화면

![엣지](https://user-images.githubusercontent.com/48666975/71656581-1d117000-2d7f-11ea-87ad-ee35aa5119b7.PNG)

### 3. Internet Explorer 실행 화면

※ __차단된 콘텐츠 허용(A)__ 클릭 ※

![익스플로러](https://user-images.githubusercontent.com/48666975/71656583-1e429d00-2d7f-11ea-8bb6-fb2efa3d94a8.PNG)
