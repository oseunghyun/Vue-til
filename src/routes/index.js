import Vue from "vue";
import VueRouter from "vue-router";
// import LoginPage from "@/Views/LoginPage";
// import SignupPage from "@/Views/SignupPage";

Vue.use(VueRouter);

export default new VueRouter({
  // url에 # 제거
  // 스토리 모드 주의할 점: 공식문서- 웹 자원들을 서버에 배포했을 때 참고하기(서버가 url을 보고 구분할 수 있도록 설정)
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      // component: LoginPage,
      // 코드 스플리팅
      component: () => import("@/Views/LoginPage.vue"),
    },
    {
      path: "/signup",
      // component: SignupPage,
      component: () => import("@/Views/SignupPage.vue"),
    },
    {
      path: "/main",
      component: () => import("@/Views/MainPage.vue"),
    },
    {
      path: "/add",
      component: () => import("@/Views/PostAddPage.vue"),
    },
    {
      // 없는 페이지 처리
      path: "*",
      component: () => import("@/Views/NotFoundPage.vue"),
    },
  ],
});
