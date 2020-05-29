import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true, name: "layoutModule" })
export default class LayoutModule extends VuexModule {
  modalStatus: boolean = false;
  menuStatus: boolean = false;

  @Mutation
  modalStatusMutation(status: boolean): void {
    this.modalStatus = status;
  }
  @Mutation
  menuStatusMutation(status: boolean): void {
    this.menuStatus = status;
  }
}
