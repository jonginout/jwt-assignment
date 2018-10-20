## express, express-session, jwt를 이용하여 3개의 api 작성하기


1. 결과물 테스트는 저장소 코드를 직접 다운받아 서버를 열고 postman으로 테스트합니다.

2. POST /api/encode로 JSON형태의 데이터를 보내면 데이터 전체를 jwt로 변환하고 jwt를 키로 갖고 value는 true로 세션에 저장. 유효하지 않은 jwt를 보내면 false로 응답.

3. POST /api/decode로 encode했던 jwt를 보내면 raw data를 반환

4. DELETE /api/destroy로 encode했던 jwt를 보내면 jwt 삭제


### 테스트 

```javascript
// http://localhost:8080/api/encode
// http://localhost:8080/api/decode
// http://localhost:8080/api/destroy

// 예시 
{
	"name" : "jongin",
	"age" : 25,
	"gender" : "M",
	"address" : "서울특별시 ㅇㅇ구 ㅇㅇㅇ로 123"
}
```

