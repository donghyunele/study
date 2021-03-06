# 이더리움과 솔리디티

---

> 이더리움은 2015년 비탈릭 부테린이 개발한 튜링 컴플리트한 프로그래밍 언어 기반의 애플리케이션 개발 플랫폼

이더(ether)라는 화폐 단위를 매개체로 앱을 개발 & 실행하고, 블록체인 네트워크에서 탈중앙화 앱을 실행 가능한 스크립트 언어를 제공한다.

> 특정 조건의 처리를 사전에 설정할 수 있는 '스마트 계약'을 구현하는데 적합하다.

** 웹 브라우저 통해 P2P 네트워크 중 하나에 접근 -> web3.js 같은 라이브러리 사용 --> JS API 통해 프론트엔드 앱을 블록체인으로 연결 **

컨트랙트를 직접 접근하는 것이 아니라 계약 ABI(Application Binary Interface)에 접근(앱 스마트 계약을 호출하기 위한 표준 문법). ABI 통해 스마트 계약으로부터 해당 계약에 대한 함수 목록 배열 등을 반환받을 수 있다.
-> 스마트 계약은 계약 내용을 자동으로 실행한다. 잔액이 일정 액수 이하면 해당 액션을 자동으로 실행하는 서비스

** 현재 이더리움은 합의 알고리즘을 작업 증명(PoW) -> 지분 증명(PoS)으로 전환하는 것을 목표 **

합의 알고리즘은 분산 시스템의 모든 프로세스가 같은 결괏값을 결정하는 과정을 합의한다.
시스템에서 발생하는 에러를 막고 무결성을 보장, 블록의 소유권과 생성 순서를 결정하는 합의 알고리즘을 사용하는 것이다.

---

### 가스
앱 실행하는 연료로서의 비용을 가스(gas)라고 한다.

네트워크에 속한 노드에 연산을 시키기 위하여 노드에 주는 연료를 수수료로 사용한다.
가스 가격과 가스 제한을 설정하여 거래를 실행.

스마트 계약을 컴파일하면 연산코드(OPCODE)로 이루어진 바이트코드가 된다. 이 연산코드에 따라 가스의 양이 정해지고, 처리하는 내용이 많을수록 가스의 양이 늘어난다.
ㅅㄱ
화폐 단위의 최소 단위는 '웨이'이다.

### 계정 구조
- EOA(Externally Owned Account): 사용자가 갖는 계정 어드레스, 연결된 잔액과, 개인키 (트랜잭션의 전송 기능이 있으며, 계정의 개인키로 제어)
- CA(Contract Account): 계약과 연결된 계정, EOA에서 거래가 거쳐 만들어지고 발신하는 거래가 트리거되어 계약 코드를 실행한다. CA에서 다른 CA를 생성하거나 코드 실행이 가능하다 [EVM에 배포하고 나면 소유자가 없으며 개인키도 없다.]

> 이더리움은 블록 크기 제한이 없다. 크기가 커지는 것을 막기 위해 계정 정보와 이더 잔액 정보는 상태 트리에 저장한다.
> 상태 트리는 블록 외부에 보관하고 각 블록에는 상태 트리의 루트 노드 값을 저장한다. (저장한 거래를 기반으로 생성)
> 잔액 방식을 확인하기 위해 송금 내역을 블록에 거래로 저장 후 정보를 담은 상태 트리를 만들어 잔액을 표시한다.

**UTXO는 병렬 거래로 거래가 쉽지만 잔액 확인 구조가 복잡하고, 이더리움은 계정 정보를 별도의 자료 구조로 분리해 빠른 검색이 가능하다. 단점은 계정 상태 변경 시 선입선출 방식으로 작업을 실행해야 한다.**

### 오라클
스마트 계약은 블록체인 외부 정보를 얻을 수 없다.
계약을 실행하는 EVM은 블록체인 외부와 차단된 상태이므로 외부 정보를 얻는다는 것은 그에 따른 안전과 신뢰성을 보장한다는 것이다.

> 오라클(Oracle) - 블록체인 외부 정보를 계약에 가져오는 개념
> 오라클라이즈는 블록체인과 외부 API를 연결하는 데이터 전송 수단, 특정 시점에 특정 서버가 제공한 데이터라는 사실을 보장하는 TLSNOTARY 암호화 인증서를 사용한다.

