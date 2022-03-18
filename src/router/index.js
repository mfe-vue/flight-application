/*
* @Author: Just be free
* @Date:   2022-03-18 14:13:44
* @Last Modified by:   Just be free
* @Last Modified time: 2022-03-18 14:18:49
* @E-mail: justbefree@126.com
*/
import Vue from "vue";
import VueRouter from "vue-router";
import FlightList from "../components/flightList.vue";

Vue.use(VueRouter);

const routes = [{ path: "/flight-list", component: FlightList }];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
