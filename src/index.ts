import BaseComponent from "./BaseComponent";
import * as Echarts from "../node_modules/echarts";
class WebComponent extends BaseComponent {
  echartsInstance!: Echarts.ECharts;
  echartsOptions: Echarts.EChartOption | Echarts.EChartsResponsiveOption = {};

  constructor() {
    super();
  }
  render() {
    super.render();

    let container = document.createElement("div");
    container.classList.add("echarts-container");
    this.shadowRoot!.appendChild(container);
    this.echartsInstance = Echarts.init(container);
    this.echartsInstance.setOption(this.echartsOptions, true, true);
  }
  getEchartsClass() {
    return Echarts
  }
  getEchartsInstance() {
    return this.echartsInstance;
  }
  getEchartsOptions() {
    return this.echartsOptions;
  }
  setOptions(options: Echarts.EChartOption | Echarts.EChartsResponsiveOption, notMerge?: boolean, lazyUpdate?: boolean) {
    this.echartsOptions = options;
    this.echartsInstance.setOption(options, notMerge, lazyUpdate);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', () => {
      this.echartsInstance?.resize();
    });
  }
}

const define = (name: string, options?: ElementDefinitionOptions) => {
  customElements.define(name, WebComponent, options);
};

export { define };
export default WebComponent;
