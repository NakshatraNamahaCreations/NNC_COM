import dynamic from "next/dynamic";

const Icons = dynamic(() => import("./Icons.client"), {
  ssr: false,
  loading: () => null,
});

export default Icons;
Icons.client
