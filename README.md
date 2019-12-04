
<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Run Docker](#run-docker)


<!-- ABOUT THE PROJECT -->
## Ý tưởng đề tài
Để tạo ra một hệ thống phi tập trung về Hệ thống để gây quỹ Ethereum sử dụng công nghệ blockchain.
Các nhà đâù tư quyên góp vốn muốn giúp đỡ hoàn cảnh khó khăn với số lượng tiền lớp phải đóng thuế 10%. Việc này gây trở ngại cho mọi cá nhân tổ chức muốn giúp đở. 
Tạo tính minh bạch, chống mọi gian lân, hạn chế tốt đa với công nghệ
Blockchain với Ethereum sẽ không chỉ giúp ích cho cộng đồng mà chúng đem lại hiệu quả minh bạch giao dịch nhanh, giảm chi phí thuế nhà nước.

## Cách hoạt động của ứng dụng
Đó là triển khai một ứng dụng phi tập trung trên Mạng Ethereum bằng công nghệ blockchain. 
Điều này sẽ làm cho hệ thống ngân hàng hoàn toàn phi tập trung cho các hoạt động của công nghệ tài chính như gây quỹ và ngân hàng. 
Sẽ có một hợp đồng đảm nhiệm trung tâm để thực hiện chấp nhật tất cả giao dịch.
* Bất cứ ai, muốn gây quỹ cho khởi nghiệp của mình đều có thể bắt đầu một chiến dịch tình nguyện mới thông qua web app
* Những người đóng góp có thể quyên góp tiền cho hợp đồng thông minh mà cá nhân tổ chức tạo chiến dịch và triển khai.
* Người bắt đầu chiến dịch, cá nhân hay tổ chức từ thiện, Yêu cầu mức tối thiểu để quyên góp là bao nhiêu
* Mọi người đóng góp đồng ý với yêu cầu và sự đồng thuận đã tạo
* ĐIỀU QUAN TRỌNG: CÁ NHÂN HAY TỔ CHỨC NÀO MUỐN TẠO CHIẾN DỊCH => ĐỀ PHẢI XÁC MINH DANH TÍNH

### Xây dựng trên

* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [Infura](#)
* [ReactJS](#)
* [NextJS Framework](#)



<!-- GETTING STARTED -->
## Getting Started

Từng bước theo bước

### Prerequisites

C
* npm
```sh
npm install npm@3.5.2
```

### Installation

1. Clone the repo
```sh
https://github.com/luonghieu184/Funding
```
2. Install NPM packages
```sh
npm install
```
3. Start
```sh
npm run start
```
## run-docker
1. Pull Rep Docker
```sh
docker pull luonghieu184/fund0412:latest
```
2. Set Port 3000 or 4000
```sh
docker run -d -p 3000:3000 luonghieu184/fund0412:latest
```
3. Run Project (Nếu bước 2 chưa chạy)
```sh
docker run luonghieu184/fund0412:latest
```
