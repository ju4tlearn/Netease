## API 说明

为考虑减少打包体积, 故仅用自带的 `fetch` 作为请求工具.

需添加新的 API 及其对应的返回类型, 请先在 `Postman` 一类的请求测试工具中自行请求后获取 Response, 通常为 JSON.

将 JSON 复制粘贴至 [json-to-typescript](https://transform.tools/json-to-typescript), 然后将输出内容存放于 `/models` 下, 并予以合适的命名.

API 需要按其功能进行分类, 需符合常识, 存放于 `/service` 下. 比如登录类操作, 即分类至 `/service/AuthService.ts`, 如无合适的文件, 自行创建, 并予以合适的命名.

## 调用示例

见 `views/IndexView.vue`.
