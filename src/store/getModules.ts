import { getModule } from "vuex-module-decorators";
import store from "@/store";

import AdminModule from "./modules/admin.module";

export const adminModule: AdminModule = getModule(AdminModule, store);
