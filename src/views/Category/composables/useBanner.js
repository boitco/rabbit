import { getBannerAPI } from "@/apis/home";
import { ref, onMounted } from "vue";

// 封装轮播图业务相关代码
export function useBanner() {
  // 获取banner
  const bannerList = ref([]);

  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: "2",
    });
    // console.log(res);
    bannerList.value = res.result;
  };

  onMounted(() => {
    getBanner();
  });

  return {
    bannerList
  }
}