# Path 모듈

폴더와 파일의 경로를 쉽게 조작할 수 있도록 도와준다.  
path 모듈이 필요한 이유는 운영체제별로 경로를 구분하는 방식이 다르기 때문이다.  
window타입과 POSIX 타입이 있다.  
POSIX는 UNIX 기반의 운영체제에서 사용하는 방식으로 대표적인 예로 Mac, Linux가 있다.
차이는 아래와 같다.

```
WINDOW: C:\Users\user
POSIX: /home/user
```
