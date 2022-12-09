import { Map, View } from "ol";
import { defaults as defaultControls } from "ol/control";
import { onUnmounted } from "vue";

/**
 * 使用 openlayers 的 Map 对象，
 * @param {HTMLDivElement} target 需要承载的 openlayers map 的容器
 * @returns 
 */
export const useMap = (target = document.createElement("div")) => {
  let map = new Map({
    target,
    view: new View({
      projection: "EPSG:4326",
      zoom: 10,
      center: [119.88386487029611, 31.935301188891493],
      extent: [119, 31, 120.8, 32.5],
      maxZoom: 19,
    }),
    controls: defaultControls({
      rotate: false,
      zoom: false,
    }),
  });

  onUnmounted(() => {
    map.dispose();
  });

  return { map };
};
