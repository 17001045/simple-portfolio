import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true, name: "adminModule" })
export default class AdminModule extends VuexModule {
  loginStatus: boolean = false;

  @Mutation
  loginStatusMutation(status: boolean): void {
    this.loginStatus = status;
  }
}
