import dynamic from "next/dynamic";

const IconsModal = dynamic(() => import("./IconsModal.client"), {
  ssr: false,
});

export default IconsModal;
