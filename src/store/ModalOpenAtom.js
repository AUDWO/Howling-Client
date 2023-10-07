import { atomFamily } from "recoil";

const ModalOpenAtom = atomFamily({
  key: "modalOpen",
  default: true,
});

export default ModalOpenAtom;
