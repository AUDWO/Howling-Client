import { atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const stateUpdateAtom = atomFamily({
  key: "stateUpdate",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export default stateUpdateAtom;
