<template>
  <div class="w-[301px] h-[10vw] bg-slate-800 flex justify-between fixed top-0">
    <div class="flex">
      <div class="rounded-full w-10 h-10">
        <img :src="img" class="rounded-full" />
      </div>

      <div>{{ name }}</div>
    </div>
    <Icon icon="jam:qr-code" style="color: white" class="mt-2 mr-2" />
  </div>
  <div ref="wrapperRef" class="wrapper">
    <div class="content flex flex-col bg-slate-600 justify-center items-center">
      <div class="w-[250px] h-[165px] bg-gray-700 rounded-lg">
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="lets-icons:message-light"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">我的消息</div>
          </div>

          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="material-symbols:cloud"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">云贝中心</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="mdi:badge-outline"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">徽章中心</div>
          </div>

          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="fluent-emoji-high-contrast:womans-clothes"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">装扮中心</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="heroicons:light-bulb"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">创作者中心</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
      </div>
      <div class="w-[250px] h-[230px] bg-gray-700 mt-2 rounded-lg">
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="fluent-emoji-high-contrast:japanese-not-free-of-charge-button"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">免费听歌</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="fluent:ticket-diagonal-24-regular"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">云村有票</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="iconamoon:shopping-bag-light"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">商城</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="fluent-mdl2:sections"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">Beat专区</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="ant-design:fire-outlined"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">云推歌</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="mingcute:music-3-line"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">彩铃专区</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="ri:signal-tower-fill"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">免流量听歌</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
      </div>
      <div class="w-[250px] h-[295px] bg-gray-700 mt-2 rounded-lg">
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="material-symbols-light:settings-outline"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">设置</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="bitcoin-icons:moon-outline"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">深色模式</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="iconamoon:clock-thin"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">定时关闭</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="carbon:headphones"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">边听缓存</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="streamline:justice-hammer"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">音乐收藏家</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="iconoir:apple-shortcuts"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">添加Siri捷径</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="proicons:prohibited"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">音乐黑名单</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="iconamoon:shield-yes-light"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">青少年模式</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="mdi:alarm-clock"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">音乐闹钟</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
      </div>
      <div class="w-[250px] h-[260px] bg-gray-700 mt-2 rounded-lg">
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="solar:headphones-round-broken"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">我的客服</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="lets-icons:order-light"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">我的订单</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="icon-park-outline:coupon"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">优惠券</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="fluent:share-16-filled"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">分享网易云音乐</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="lucide:folder-input"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div
              class="mt-2 overflow-hidden text-ellipsis whitespace-nowrap w-[170px]"
            >
              个人信息收集与使用清单
            </div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="hugeicons:triangle-02"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div
              class="mt-2 overflow-hidden text-ellipsis whitespace-nowrap w-[170px]"
            >
              个人信息与第三方共享清单
            </div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="material-symbols-light:privacy-tip-outline"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div
              class="mt-2 overflow-hidden text-ellipsis whitespace-nowrap w-[170px]"
            >
              个人信息与隐私保护
            </div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="mdi-light:information"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">关于</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
      </div>
      <div class="w-[250px] h-[70px] bg-gray-700 mt-2 rounded-lg">
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="icon-park-outline:switch"
              style="color: white"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2">切换账号</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
        <div class="flex w-[240px] justify-between">
          <div class="flex">
            <Icon
              icon="mdi:shutdown"
              style="color: red"
              class="mt-3 ml-3 mr-3"
            />
            <div class="mt-2 text-red-500">退出登录</div>
          </div>
          <div class="mt-1.5">></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";
import BScroll from "better-scroll";
import { ProdetailService } from "@/client/api/services/profileService";
const name = ref("");
const img = ref("");
const test1 = async () => {
  let a = localStorage.getItem("id");

  await ProdetailService.getProfileDetail(Number(a)).then((resp) => {
    name.value = resp.profile.nickname;
    img.value = resp.profile.avatarUrl;
  });
};

test1();
console.log(name);

const wrapperRef = ref(null);
let scrollInstance = null;
onMounted(() => {
  // 使用 setTimeout 来确保 DOM 完全渲染
  if (wrapperRef.value) {
    scrollInstance = new BScroll(wrapperRef.value, {
      scrollY: true,
      click: true,
    });
  }
});
</script>
<style>
.wrapper {
  width: 300px;
  height: 600px;
  overflow: hidden;
  margin-top: 38px;
}
.content {
  height: 1110px; /* 确保内容高度超过容器高度 */
}
</style>
