Folder này chỉ để source code, phân bố về cách thức để thì sẽ cập nhật sau. -- Leader, 8:25pm gmt+7, 2023/6/14

# BuyMee Project

## Hướng dẫn sử dụng

> ### Frontend
>
> thực hiện `cd` đến thư mục BuyMee, để khởi chạy, sử dụng lệnh:

```shell
yarn dev
```

với lần chạy đầu tiên, dùng lệnh:

```shell
yarn
```

**Lưu ý:**

> - Vui lòng cài đặt extension Prettier
> - Sử dụng lệnh `Ctrl + Shift + P` và vào phần settings, chỉnh trường `default formatter` thành prettier.
> - Tạo file `.env` cùng cấp với `.env.sample` (copy-patse file) và điền các thông tin cần thiết.

> ### Backend

với lần chạy đầu tiên, dùng lệnh:

```shell
yarn
```

để chạy chương trình

```shell
yarn start
```

để build chương trình

```shell
yarn build
```

với API doc truy cập

```
API_ENDPOINT/api-doc/
```

#### **PRISMA\_**

để thực hiện sửa cơ sở dữ liệu trên prisma, dùng lệnh

```shell
yarn prisma migrate dev --name <ghi_những_thay_đổi>
```

để hiện các object đang tồn tại trong prisma, dùng lệnh

```shell
yarn prisma studio
```

để load các thay đổi trên prisma, dùng lệnh:

```shell
yarn prisma migrate dev
```

> **Lưu ý:**
>
> - Vui lòng cài đặt extension Prisma
> - Tạo file `.env` cùng cấp với `.env.sample` (copy-patse file) và điền các thông tin cần thiết.
> - Sử dụng postgreSQL 15

## Happy coding !
