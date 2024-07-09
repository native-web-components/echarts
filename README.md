# echarts

### usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="app"></div>
    <wc-echarts style="display: block; height: 500px; background: #f5f5f5;"></wc-echarts>

    <script type="module">
      const echarts = document.querySelector("wc-echarts");
      const options = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          top: "5%",
          // left: "center",
          show: false,
        },
        series: [
          {
            name: "终端类型",
            type: "pie",
            radius: ["30%", "50%"],
            center: ["50%", "45%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 2,
              // borderColor: "#fff",
              // borderWidth: 1,
            },
            label: {
              show: true,
              // position: "center",
              // color: "#fff",
              formatter: "{b}({c})\n{d}%",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 16,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: true,
            },
            data: [
              { value: 1048, name: "电脑" },
              { value: 735, name: "手机" },
              { value: 580, name: "平板" },
              { value: 484, name: "其他" },
            ],
          },
        ],
      };
      echarts.setOptions(options);
    </script>
  </body>
</html>
```
