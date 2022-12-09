import { Viewer, TileMapServiceImageryProvider, buildModuleUrl } from "cesium";
import { onUnmounted } from "vue";

/**
 * 使用 cesium 的 Viewer 对象，
 * @param {HTMLDivElement} container 需要承载的 cesium map 的容器
 * @returns 
 */
export const useCesium = (container = document.createElement("div"), option = {}) => {
  let config = {
    imageryProvider: new TileMapServiceImageryProvider({
      url: buildModuleUrl("Assets/Textures/NaturalEarthII"),
    }),
    navigationInstructionsInitiallyVisible: false,
    projectionPicker: false,
    creditContainer: null,
    animation: true, // 是否创建动画小器件，左下角仪表
    baseLayerPicker: false, // 是否显示图层选择器
    fullscreenButton: false, // 是否显示全屏按钮
    geocoder: false, // 是否显示geocoder小器件，右上角查询按钮
    homeButton: false, // 是否显示Home按钮
    infoBox: false, // 是否显示信息框
    sceneModePicker: false, // 是否显示3D/2D选择器
    selectionIndicator: false, // 是否显示选取指示器组件
    timeline: true, // 是否显示时间轴
    navigationHelpButton: false, // 是否显示右上角的帮助按钮
    ...option
  };
  
  let viewer = new Viewer(container, config)

  onUnmounted(() => {
    viewer.destroy();
  });

  return { viewer };
};
