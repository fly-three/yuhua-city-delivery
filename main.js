const STORAGE_KEY = "yuhua-dispatch-state-v1";

const areas = {
  "高桥": { x: 145, y: 90 },
  "左家塘": { x: 290, y: 70 },
  "圭塘": { x: 455, y: 88 },
  "万家丽": { x: 605, y: 110 },
  "井湾子": { x: 235, y: 220 },
  "红星": { x: 430, y: 230 },
  "黎托": { x: 615, y: 238 }
};

const tempOptions = ["常温", "冷藏", "冷冻"];
const statusLabels = {
  pending: "待分单",
  assigned: "已分单",
  delivering: "配送中",
  done: "已签收",
  exception: "异常"
};

const drivers = [
  {
    id: "D01",
    name: "李建军",
    phone: "13873190011",
    plate: "湘A7YH21",
    areas: ["高桥", "左家塘"],
    temps: ["常温", "冷藏"],
    capacity: 720,
    color: "#0f8b80"
  },
  {
    id: "D02",
    name: "周明",
    phone: "13974862031",
    plate: "湘A3C918",
    areas: ["圭塘", "万家丽", "黎托"],
    temps: ["常温", "冷藏"],
    capacity: 760,
    color: "#3d6fb6"
  },
  {
    id: "D03",
    name: "陈果",
    phone: "13787280655",
    plate: "湘AD5F29",
    areas: ["井湾子", "红星"],
    temps: ["常温", "冷藏", "冷冻"],
    capacity: 620,
    color: "#b7791f"
  },
  {
    id: "D04",
    name: "王志强",
    phone: "18673184220",
    plate: "湘A2L773",
    areas: ["高桥", "红星", "黎托"],
    temps: ["常温"],
    capacity: 680,
    color: "#7656a8"
  }
];

const seedOrders = [
  order("YH260708001", "长沙雨花2B仓", "盒马鲜配", "林店长", "13800010001", "高桥大市场新一区A12栋", "高桥", "冷藏", 56, "生鲜蔬果", 9, "今日 10:00-12:00", "后仓月台", "优先"),
  order("YH260708002", "长沙雨花2B仓", "盒马鲜配", "赵经理", "13800010002", "左家塘街道曙光中路门店", "左家塘", "冷藏", 38, "乳品", 6, "今日 11:00-13:00", "门店前台", "标准"),
  order("YH260708003", "长沙雨花2B仓", "湘味到家", "胡老板", "13800010003", "高桥火焰商贸城二区", "高桥", "常温", 112, "调味品", 14, "今日 14:00-18:00", "地下卸货区", "标准"),
  order("YH260708004", "长沙雨花2B仓", "小熊母婴", "王女士", "13800010004", "万家丽中路二段母婴集合店", "万家丽", "常温", 72, "母婴用品", 11, "今日 13:00-16:00", "收货口", "标准"),
  order("YH260708005", "长沙雨花2B仓", "康宁医药", "彭药师", "13800010005", "圭塘路社区药房", "圭塘", "冷藏", 24, "药品", 3, "今日 09:30-11:30", "药房冷柜", "优先"),
  order("YH260708006", "长沙雨花2B仓", "湘味到家", "刘老板", "13800010006", "井湾子家具城西门便利店", "井湾子", "常温", 95, "粮油", 8, "今日 15:00-18:00", "侧门", "标准"),
  order("YH260708007", "长沙雨花2B仓", "冻品优选", "蒋厨师", "13800010007", "红星冷链市场6号档口", "红星", "冷冻", 68, "冻品", 5, "今日 10:00-12:00", "冷库平台", "优先"),
  order("YH260708008", "长沙雨花2B仓", "小熊母婴", "谢主管", "13800010008", "黎托街道高铁新城门店", "黎托", "常温", 44, "纸品", 7, "今日 16:00-19:00", "门店仓", "标准"),
  order("YH260708009", "长沙雨花2B仓", "康宁医药", "陈药师", "13800010009", "左家塘桂花路连锁药房", "左家塘", "冷藏", 18, "疫苗耗材", 2, "今日 09:00-10:30", "验收台", "优先"),
  order("YH260708010", "长沙雨花2B仓", "湘味到家", "黄老板", "13800010010", "红星美凯龙周边餐饮店", "红星", "常温", 128, "餐厨干货", 16, "今日 14:00-17:00", "后厨门", "标准"),
  order("YH260708011", "长沙雨花2B仓", "盒马鲜配", "熊店长", "13800010011", "圭塘万科里社区店", "圭塘", "冷藏", 47, "鲜食", 6, "今日 12:00-14:00", "店内冷柜", "标准"),
  order("YH260708012", "长沙雨花2B仓", "冻品优选", "邓师傅", "13800010012", "井湾子生鲜批发门店", "井湾子", "冷冻", 86, "冻肉", 7, "今日 10:30-12:30", "冷冻库", "优先"),
  order("YH260708013", "长沙雨花2B仓", "小熊母婴", "许店长", "13800010013", "高桥现代商贸城母婴店", "高桥", "常温", 31, "洗护用品", 5, "今日 13:00-15:30", "门店仓", "标准"),
  order("YH260708014", "长沙雨花2B仓", "康宁医药", "宋药师", "13800010014", "万家丽南路药房", "万家丽", "冷藏", 21, "冷链药品", 2, "今日 09:30-11:00", "冷柜验收", "优先"),
  order("YH260708015", "长沙雨花2B仓", "湘味到家", "唐老板", "13800010015", "黎托大道社区便利店", "黎托", "常温", 61, "休闲食品", 9, "今日 17:00-19:00", "门店收银台", "标准"),
  order("YH260708016", "长沙雨花2B仓", "盒马鲜配", "邹店长", "13800010016", "红星德思勤周边社区店", "红星", "冷藏", 42, "净菜", 6, "今日 12:00-14:00", "后仓", "标准")
];

const state = loadState();
const els = {};

function order(id, warehouse, owner, recipient, phone, address, area, temperature, weight, goodsType, pieces, timeWindow, dropPoint, priority) {
  return {
    id,
    warehouse,
    owner,
    recipient,
    phone,
    address,
    area,
    temperature,
    weight,
    goodsType,
    pieces,
    timeWindow,
    dropPoint,
    priority,
    status: "pending",
    routeId: "",
    sequence: 0,
    custom: {
      "回单要求": "签字或拍照",
      "装卸备注": dropPoint
    }
  };
}

function loadState() {
  // 服务端环境返回默认状态
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return {
      orders: structuredClone(seedOrders),
      routes: [],
      selectedRouteId: "",
      selectedOrderId: "",
      customFields: [
        { name: "回单要求", value: "签字或拍照" },
        { name: "装卸备注", value: "门店收货口" },
        { name: "客户通知", value: "到店前10分钟电话" }
      ],
      strategy: {
        ownerPolicy: "merge",
        maxStops: 8,
        capacity: 650,
        keepTemp: true,
        priorityFirst: true
      },
      filters: {
        search: "",
        owner: "全部",
        temperature: "全部",
        status: "全部"
      }
    };
  }

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "");
    if (saved?.orders?.length) return saved;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
  return {
    orders: structuredClone(seedOrders),
    routes: [],
    selectedRouteId: "",
    selectedOrderId: "",
    customFields: [
      { name: "回单要求", value: "签字或拍照" },
      { name: "装卸备注", value: "门店收货口" },
      { name: "客户通知", value: "到店前10分钟电话" }
    ],
    strategy: {
      ownerPolicy: "merge",
      maxStops: 8,
      capacity: 650,
      keepTemp: true,
      priorityFirst: true
    },
    filters: {
      search: "",
      owner: "全部",
      temperature: "全部",
      status: "全部"
    }
  };
}

function saveState() {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
}

function $(id) {
  return document.getElementById(id);
}

function init() {
  if (location.hash.startsWith("#driver=")) {
    renderDriverView(location.hash.slice(8));
    return;
  }

  [
    "searchInput",
    "ownerFilter",
    "tempFilter",
    "statusFilter",
    "maxStopsInput",
    "capacityInput",
    "keepTempCheck",
    "priorityCheck",
    "kpiRow",
    "routeMap",
    "mapLegend",
    "routeMapSub",
    "orderTable",
    "orderCountText",
    "routeList",
    "driverPack",
    "printArea",
    "toast",
    "orderDialog",
    "orderForm",
    "fieldDialog",
    "fieldForm",
    "customFieldList",
    "areaSelect",
    "temperatureSelect"
  ].forEach((id) => {
    els[id] = $(id);
  });

  $("dispatchBtn").addEventListener("click", () => autoDispatch());
  $("bulkDispatchBtn").addEventListener("click", () => autoDispatch(filteredOrders()));
  $("exportBtn").addEventListener("click", exportCsv);
  $("importBtn").addEventListener("click", () => $("csvFileInput").click());
  $("csvFileInput").addEventListener("change", handleImportCsv);
  $("resetBtn").addEventListener("click", resetDemo);
  $("clearFiltersBtn").addEventListener("click", clearFilters);
  $("addOrderBtn").addEventListener("click", () => els.orderDialog.showModal());
  $("addFieldBtn").addEventListener("click", () => els.fieldDialog.showModal());
  $("printBtn").addEventListener("click", printSelectedRoute);
  $("copyDriverLinkBtn").addEventListener("click", copyDriverLink);

  els.searchInput.addEventListener("input", (event) => {
    state.filters.search = event.target.value.trim();
    render();
  });
  els.ownerFilter.addEventListener("change", (event) => {
    state.filters.owner = event.target.value;
    render();
  });
  els.tempFilter.addEventListener("change", (event) => {
    state.filters.temperature = event.target.value;
    render();
  });
  els.statusFilter.addEventListener("change", (event) => {
    state.filters.status = event.target.value;
    render();
  });
  els.maxStopsInput.addEventListener("change", syncStrategy);
  els.capacityInput.addEventListener("change", syncStrategy);
  els.keepTempCheck.addEventListener("change", syncStrategy);
  els.priorityCheck.addEventListener("change", syncStrategy);

  document.querySelectorAll("[data-owner-policy]").forEach((button) => {
    button.addEventListener("click", () => {
      state.strategy.ownerPolicy = button.dataset.ownerPolicy;
      renderStrategyControls();
      saveState();
    });
  });

  els.orderForm.addEventListener("submit", handleAddOrder);
  els.fieldForm.addEventListener("submit", handleAddField);

  renderSelectOptions();
  render();
}

function renderSelectOptions() {
  fillSelect(els.areaSelect, Object.keys(areas).map((value) => [value, value]));
  fillSelect(els.temperatureSelect, tempOptions.map((value) => [value, value]));
}

function fillSelect(select, options, selected) {
  select.innerHTML = options
    .map(([value, label]) => `<option value="${escapeHtml(value)}"${selected === value ? " selected" : ""}>${escapeHtml(label)}</option>`)
    .join("");
}

function render() {
  renderFilters();
  renderStrategyControls();
  renderKpis();
  renderMap();
  renderOrders();
  renderRoutes();
  renderDriverPack();
  renderCustomFields();
  saveState();
}

function renderFilters() {
  els.searchInput.value = state.filters.search;
  const owners = ["全部", ...unique(state.orders.map((item) => item.owner))];
  fillSelect(els.ownerFilter, owners.map((item) => [item, item]), state.filters.owner);
  fillSelect(els.tempFilter, ["全部", ...tempOptions].map((item) => [item, item]), state.filters.temperature);
  fillSelect(
    els.statusFilter,
    [["全部", "全部"], ...Object.entries(statusLabels).map(([value, label]) => [value, label])],
    state.filters.status
  );
}

function renderStrategyControls() {
  document.querySelectorAll("[data-owner-policy]").forEach((button) => {
    button.classList.toggle("active", state.strategy.ownerPolicy === button.dataset.ownerPolicy);
  });
  els.maxStopsInput.value = state.strategy.maxStops;
  els.capacityInput.value = state.strategy.capacity;
  els.keepTempCheck.checked = state.strategy.keepTemp;
  els.priorityCheck.checked = state.strategy.priorityFirst;
}

function syncStrategy() {
  state.strategy.maxStops = clamp(Number(els.maxStopsInput.value) || 8, 3, 20);
  state.strategy.capacity = clamp(Number(els.capacityInput.value) || 650, 100, 1200);
  state.strategy.keepTemp = els.keepTempCheck.checked;
  state.strategy.priorityFirst = els.priorityCheck.checked;
  render();
}

function renderKpis() {
  const total = state.orders.length;
  const assigned = state.orders.filter((item) => item.routeId).length;
  const cold = state.orders.filter((item) => item.temperature !== "常温").length;
  const exceptions = state.orders.filter((item) => item.status === "exception").length;
  const owners = unique(state.orders.map((item) => item.owner)).length;
  const weight = round(state.orders.reduce((sum, item) => sum + item.weight, 0));
  const cards = [
    ["总运单", total, `${owners} 个货主`],
    ["已入路线", assigned, `${state.routes.length} 条司机路线`],
    ["冷链票数", cold, "冷藏/冷冻分开交接"],
    ["总重量", `${weight}`, "kg"],
    ["异常", exceptions, "拒收/联系不上/破损"]
  ];

  els.kpiRow.innerHTML = cards
    .map(
      ([label, value, hint]) => `
        <article class="kpi">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${hint}</small>
        </article>
      `
    )
    .join("");
}

function renderMap() {
  const svg = els.routeMap;
  const routeFragments = state.routes
    .map((route) => {
      const points = route.orders.map((id) => areas[getOrder(id)?.area]).filter(Boolean);
      if (!points.length) return "";
      const path = [{ x: 72, y: 154 }, ...points]
        .map((point) => `${point.x},${point.y}`)
        .join(" ");
      const stops = route.orders
        .map((id, index) => {
          const item = getOrder(id);
          const point = item ? areas[item.area] : null;
          if (!point) return "";
          return `
            <circle cx="${point.x}" cy="${point.y}" r="11" fill="${route.color}" opacity="0.95"></circle>
            <text x="${point.x}" y="${point.y + 4}" text-anchor="middle" fill="#fff" font-size="10" font-weight="800">${index + 1}</text>
          `;
        })
        .join("");
      return `
        <polyline points="${path}" fill="none" stroke="${route.color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.78"></polyline>
        ${stops}
      `;
    })
    .join("");

  const areaFragments = Object.entries(areas)
    .map(
      ([name, point]) => `
        <rect class="map-area" x="${point.x - 42}" y="${point.y - 20}" width="84" height="40" rx="8"></rect>
        <text class="map-label" x="${point.x}" y="${point.y - 26}" text-anchor="middle">${name}</text>
      `
    )
    .join("");

  svg.innerHTML = `
    <rect x="18" y="22" width="724" height="256" rx="8" fill="#fcfdfb" stroke="#e0e6de"></rect>
    <path d="M80 55H690M80 155H690M80 255H690M210 38V268M380 38V268M550 38V268" stroke="#e8eee7" stroke-width="1"></path>
    ${areaFragments}
    <circle class="warehouse-node" cx="72" cy="154" r="18"></circle>
    <text x="72" y="158" text-anchor="middle" fill="#fff" font-size="12" font-weight="800">仓</text>
    <text class="map-label" x="72" y="128" text-anchor="middle">雨花2B仓</text>
    ${routeFragments}
  `;

  els.routeMapSub.textContent = state.routes.length
    ? `已生成 ${state.routes.length} 条路线，按司机交付包执行分拣和配送`
    : "待分单运单将按片区、温层、载重和时效生成路线";

  els.mapLegend.innerHTML = state.routes
    .map(
      (route) => `
        <span class="legend-item">
          <i class="legend-swatch" style="background:${route.color}"></i>
          ${route.id}
        </span>
      `
    )
    .join("");
}

function renderOrders() {
  const rows = filteredOrders();
  els.orderCountText.textContent = `${rows.length} / ${state.orders.length} 票，${round(rows.reduce((sum, item) => sum + item.weight, 0))} kg`;
  els.orderTable.innerHTML = rows
    .map((item) => {
      const routeLabel = item.routeId ? `${item.routeId}-${String(item.sequence).padStart(2, "0")}` : "未分配";
      return `
        <tr data-order-id="${escapeHtml(item.id)}" class="${state.selectedOrderId === item.id ? "selected" : ""}">
          <td>
            <div class="waybill-cell">
              <strong>${escapeHtml(item.id)}</strong>
              <small>${escapeHtml(item.warehouse)}</small>
            </div>
          </td>
          <td>${escapeHtml(item.owner)}</td>
          <td>
            <div class="waybill-cell">
              <strong>${escapeHtml(item.recipient)}</strong>
              <small>${maskPhone(item.phone)}</small>
            </div>
          </td>
          <td class="address-cell">
            ${escapeHtml(item.address)}
            <small>${escapeHtml(item.area)} / ${escapeHtml(item.timeWindow)}</small>
          </td>
          <td>${tempTag(item.temperature)}</td>
          <td>${round(item.weight)} kg</td>
          <td>${item.pieces}</td>
          <td>${escapeHtml(routeLabel)}</td>
          <td><span class="status ${item.status}">${statusLabels[item.status]}</span></td>
        </tr>
      `;
    })
    .join("");

  els.orderTable.querySelectorAll("tr").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedOrderId = row.dataset.orderId;
      const orderItem = getOrder(state.selectedOrderId);
      if (orderItem?.routeId) state.selectedRouteId = orderItem.routeId;
      render();
    });
  });
}

function renderRoutes() {
  if (!state.routes.length) {
    els.routeList.innerHTML = `<div class="empty-state">暂无路线</div>`;
    return;
  }

  els.routeList.innerHTML = state.routes
    .map((route) => {
      const routeOrders = route.orders.map(getOrder).filter(Boolean);
      const firstAreas = unique(routeOrders.map((item) => item.area)).join(" / ");
      return `
        <button class="route-card ${state.selectedRouteId === route.id ? "active" : ""}" data-route-id="${route.id}" style="border-left-color:${route.color}" type="button">
          <div class="route-card-head">
            <div>
              <h3>${route.id} · ${escapeHtml(route.driver.name)}</h3>
              <small>${escapeHtml(route.driver.plate)} · ${escapeHtml(firstAreas)}</small>
            </div>
            <span class="tag">${escapeHtml(route.temperature)}</span>
          </div>
          <div class="mini-grid">
            <div class="mini-metric"><strong>${routeOrders.length}</strong><span>票</span></div>
            <div class="mini-metric"><strong>${round(sum(routeOrders, "weight"))}</strong><span>kg</span></div>
            <div class="mini-metric"><strong>${sum(routeOrders, "pieces")}</strong><span>件</span></div>
          </div>
        </button>
      `;
    })
    .join("");

  els.routeList.querySelectorAll("[data-route-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedRouteId = button.dataset.routeId;
      render();
    });
  });
}

function renderDriverPack() {
  const route = selectedRoute();
  if (!route) {
    els.driverPack.innerHTML = `<div class="empty-state">选择路线后生成司机交付包</div>`;
    return;
  }
  const routeOrders = route.orders.map(getOrder).filter(Boolean);
  const driverUrl = buildDriverUrl(route);
  els.driverPack.innerHTML = `
    <div class="pack-header">
      <div>
        <strong>${route.id} · ${escapeHtml(route.driver.name)}</strong>
        <p>${escapeHtml(route.driver.phone)} · ${escapeHtml(route.driver.plate)}</p>
      </div>
      ${fakeQr(route.id)}
    </div>
    <div class="mini-grid">
      <div class="mini-metric"><strong>${routeOrders.length}</strong><span>门店</span></div>
      <div class="mini-metric"><strong>${round(sum(routeOrders, "weight"))}</strong><span>kg</span></div>
      <div class="mini-metric"><strong>${sum(routeOrders, "pieces")}</strong><span>件</span></div>
    </div>
    <div class="pack-actions">
      <button class="secondary" data-open-driver type="button">
        <svg><use href="#i-phone"></use></svg>
        <span>打开H5</span>
      </button>
      <button class="secondary" data-copy-link type="button">
        <svg><use href="#i-link"></use></svg>
        <span>复制链接</span>
      </button>
      <button class="ghost" data-print type="button">
        <svg><use href="#i-print"></use></svg>
        <span>打印交接</span>
      </button>
      <button class="ghost" data-mark-delivering type="button">
        <svg><use href="#i-check"></use></svg>
        <span>出车</span>
      </button>
    </div>
    <div class="stop-list">
      ${routeOrders
        .map(
          (item) => `
            <div class="stop-item">
              <span class="stop-seq">${item.sequence}</span>
              <div>
                <strong>${escapeHtml(item.recipient)} · ${escapeHtml(item.owner)}</strong>
                <p>${escapeHtml(item.address)}<br />${escapeHtml(item.temperature)} / ${round(item.weight)}kg / ${item.pieces}件 / ${escapeHtml(item.timeWindow)}</p>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  els.driverPack.querySelector("[data-open-driver]").addEventListener("click", () => window.open(driverUrl, "_blank"));
  els.driverPack.querySelector("[data-copy-link]").addEventListener("click", () => copyText(driverUrl, "司机H5链接已复制"));
  els.driverPack.querySelector("[data-print]").addEventListener("click", printSelectedRoute);
  els.driverPack.querySelector("[data-mark-delivering]").addEventListener("click", () => {
    routeOrders.forEach((item) => {
      if (item.status === "assigned") item.status = "delivering";
    });
    showToast("路线已标记出车");
    render();
  });
}

function renderCustomFields() {
  els.customFieldList.innerHTML = state.customFields
    .map((item) => `<span class="field-pill">${escapeHtml(item.name)}: ${escapeHtml(item.value || "空")}</span>`)
    .join("");
}

function autoDispatch(inputOrders) {
  syncStrategy();
  const candidates = (inputOrders || state.orders).filter((item) => item.status !== "done" && item.status !== "exception");
  if (!candidates.length) {
    showToast("没有可分配运单");
    return;
  }

  state.routes = [];
  state.orders.forEach((item) => {
    if (candidates.some((candidate) => candidate.id === item.id)) {
      item.routeId = "";
      item.sequence = 0;
      item.status = "pending";
    }
  });

  const sorted = [...candidates].sort((a, b) => {
    if (state.strategy.priorityFirst && a.priority !== b.priority) {
      return a.priority === "优先" ? -1 : 1;
    }
    return routeSortKey(a).localeCompare(routeSortKey(b), "zh-Hans-CN");
  });

  for (const item of sorted) {
    const driver = chooseDriver(item);
    const route = findRouteFor(item, driver) || createRoute(item, driver);
    route.orders.push(item.id);
    item.routeId = route.id;
    item.sequence = route.orders.length;
    item.status = "assigned";
  }

  resequenceRoutes();
  state.selectedRouteId = state.routes[0]?.id || "";
  showToast(`已生成 ${state.routes.length} 条司机路线`);
  render();
}

function chooseDriver(item) {
  const compatible = drivers.filter((driver) => driver.temps.includes(item.temperature));
  const areaDriver = compatible.find((driver) => driver.areas.includes(item.area));
  return areaDriver || compatible[0] || drivers[0];
}

function findRouteFor(item, driver) {
  return state.routes.find((route) => {
    if (route.driver.id !== driver.id) return false;
    const routeOrders = route.orders.map(getOrder).filter(Boolean);
    const currentWeight = sum(routeOrders, "weight");
    if (routeOrders.length >= state.strategy.maxStops) return false;
    if (currentWeight + item.weight > Math.min(driver.capacity, state.strategy.capacity)) return false;
    if (state.strategy.keepTemp && route.temperature !== item.temperature) return false;
    if (state.strategy.ownerPolicy === "split" && route.owner !== item.owner) return false;
    return true;
  });
}

function createRoute(item, driver) {
  const sequence = state.routes.length + 1;
  const route = {
    id: `R${String(sequence).padStart(2, "0")}`,
    driver,
    temperature: item.temperature,
    owner: item.owner,
    color: driver.color,
    orders: []
  };
  state.routes.push(route);
  return route;
}

function resequenceRoutes() {
  state.routes.forEach((route, index) => {
    route.id = `R${String(index + 1).padStart(2, "0")}`;
    const ordered = route.orders
      .map(getOrder)
      .filter(Boolean)
      .sort((a, b) => routeSortKey(a).localeCompare(routeSortKey(b), "zh-Hans-CN"));
    route.orders = ordered.map((item, orderIndex) => {
      item.routeId = route.id;
      item.sequence = orderIndex + 1;
      return item.id;
    });
  });
}

function routeSortKey(item) {
  const point = areas[item.area] || { x: 0, y: 0 };
  return `${point.x.toString().padStart(3, "0")}-${point.y.toString().padStart(3, "0")}-${item.timeWindow}-${item.id}`;
}

function filteredOrders() {
  const q = state.filters.search.toLowerCase();
  return state.orders.filter((item) => {
    const text = `${item.id} ${item.owner} ${item.recipient} ${item.address} ${item.goodsType}`.toLowerCase();
    if (q && !text.includes(q)) return false;
    if (state.filters.owner !== "全部" && item.owner !== state.filters.owner) return false;
    if (state.filters.temperature !== "全部" && item.temperature !== state.filters.temperature) return false;
    if (state.filters.status !== "全部" && item.status !== state.filters.status) return false;
    return true;
  });
}

function handleAddOrder(event) {
  event.preventDefault();
  if (event.submitter?.value === "cancel") {
    els.orderDialog.close();
    return;
  }
  const data = Object.fromEntries(new FormData(els.orderForm));
  const next = order(
    `YH${new Date().toISOString().slice(2, 10).replaceAll("-", "")}${String(state.orders.length + 1).padStart(3, "0")}`,
    data.warehouse,
    data.owner,
    data.recipient,
    data.phone,
    data.address,
    data.area,
    data.temperature,
    Number(data.weight),
    data.goodsType,
    Number(data.pieces),
    data.timeWindow,
    data.dropPoint,
    "标准"
  );
  for (const field of state.customFields) {
    next.custom[field.name] = field.value;
  }
  state.orders.unshift(next);
  els.orderDialog.close();
  els.orderForm.reset();
  showToast("运单已加入");
  render();
}

function handleAddField(event) {
  event.preventDefault();
  if (event.submitter?.value === "cancel") {
    els.fieldDialog.close();
    return;
  }
  const data = Object.fromEntries(new FormData(els.fieldForm));
  const name = String(data.fieldName || "").trim();
  if (!name) return;
  const value = String(data.fieldValue || "").trim();
  if (!state.customFields.some((item) => item.name === name)) {
    state.customFields.push({ name, value });
    state.orders.forEach((item) => {
      item.custom[name] = value;
    });
  }
  els.fieldDialog.close();
  els.fieldForm.reset();
  showToast("扩展字段已保存");
  render();
}

function clearFilters() {
  state.filters = { search: "", owner: "全部", temperature: "全部", status: "全部" };
  render();
}

function resetDemo() {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  const fresh = loadState();
  Object.assign(state, fresh);
  showToast("演示数据已重置");
  render();
}

function exportCsv() {
  const headers = ["运单号", "仓库", "货主", "收件人", "电话", "地址", "片区", "温层", "重量", "物品类型", "件数", "路线", "序号", "状态", "时效窗", "卸货点"];
  const rows = state.orders.map((item) => [
    item.id,
    item.warehouse,
    item.owner,
    item.recipient,
    item.phone,
    item.address,
    item.area,
    item.temperature,
    item.weight,
    item.goodsType,
    item.pieces,
    item.routeId,
    item.sequence,
    statusLabels[item.status],
    item.timeWindow,
    item.dropPoint
  ]);
  const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `雨花城配交接单-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function handleImportCsv(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const text = e.target.result;
      const lines = text.split('\n').filter(line => line.trim());

      if (lines.length < 2) {
        showToast("CSV 文件格式错误：没有数据行", "error");
        return;
      }

      const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
      const importedOrders = [];
      let errorCount = 0;

      for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i]);
        if (values.length < 11) continue;

        const orderData = {
          id: values[0] || `YH${Date.now()}${i}`,
          warehouse: values[1] || "长沙雨花2B仓",
          owner: values[2] || "未知货主",
          recipient: values[3] || "收件人",
          phone: values[4] || "",
          address: values[5] || "",
          area: values[6] || Object.keys(areas)[0],
          temperature: values[7] || "常温",
          weight: parseFloat(values[8]) || 0,
          goodsType: values[9] || "其他",
          pieces: parseInt(values[10]) || 1,
          timeWindow: values[14] || "今日配送",
          dropPoint: values[15] || "门店",
          priority: "标准",
          status: "pending",
          routeId: null,
          sequence: null
        };

        // 验证必填字段
        if (!orderData.recipient || !orderData.address || !orderData.area) {
          errorCount++;
          continue;
        }

        // 验证片区
        if (!areas[orderData.area]) {
          errorCount++;
          continue;
        }

        // 验证温层
        if (!tempOptions.includes(orderData.temperature)) {
          orderData.temperature = "常温";
        }

        importedOrders.push(orderData);
      }

      if (importedOrders.length === 0) {
        showToast("没有导入任何运单，请检查 CSV 格式", "error");
        return;
      }

      // 添加到运单池
      state.orders.push(...importedOrders);
      saveState();
      render();

      const message = errorCount > 0
        ? `成功导入 ${importedOrders.length} 条运单，跳过 ${errorCount} 条无效数据`
        : `成功导入 ${importedOrders.length} 条运单`;
      showToast(message);

    } catch (error) {
      console.error("CSV 导入错误:", error);
      showToast("CSV 文件解析失败，请检查格式", "error");
    }

    // 清空文件输入
    event.target.value = '';
  };

  reader.readAsText(file, 'UTF-8');
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());

  return result.map(v => v.replace(/^"|"$/g, ''));
}

function printSelectedRoute() {
  const route = selectedRoute();
  if (!route) {
    showToast("请先选择路线");
    return;
  }
  renderPrintArea(route);
  window.print();
}

function renderPrintArea(route) {
  const routeOrders = route.orders.map(getOrder).filter(Boolean);
  const ownerText = unique(routeOrders.map((item) => item.owner)).join("、");
  els.printArea.innerHTML = `
    <section class="print-sheet">
      <div class="print-title">
        <div>
          <h1>长沙雨花2B仓城配交接单</h1>
          <p>${route.id} / ${escapeHtml(route.driver.name)} / ${escapeHtml(route.driver.plate)}</p>
        </div>
        <div>${new Date().toLocaleString("zh-CN")}</div>
      </div>
      <div class="print-meta">
        <div>货主：${escapeHtml(ownerText)}</div>
        <div>温层：${escapeHtml(route.temperature)}</div>
        <div>票数：${routeOrders.length}</div>
        <div>总重：${round(sum(routeOrders, "weight"))}kg</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>运单</th>
            <th>货主</th>
            <th>收件人</th>
            <th>电话</th>
            <th>地址</th>
            <th>温层</th>
            <th>重量</th>
            <th>件数</th>
            <th>时效/卸货点</th>
            <th>签收</th>
          </tr>
        </thead>
        <tbody>
          ${routeOrders
            .map(
              (item) => `
                <tr>
                  <td>${item.sequence}</td>
                  <td>${escapeHtml(item.id)}</td>
                  <td>${escapeHtml(item.owner)}</td>
                  <td>${escapeHtml(item.recipient)}</td>
                  <td>${escapeHtml(item.phone)}</td>
                  <td>${escapeHtml(item.address)}</td>
                  <td>${escapeHtml(item.temperature)}</td>
                  <td>${round(item.weight)}kg</td>
                  <td>${item.pieces}</td>
                  <td>${escapeHtml(item.timeWindow)} / ${escapeHtml(item.dropPoint)}</td>
                  <td></td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
      <div class="print-stickers">
        ${routeOrders
          .map(
            (item) => `
              <div class="print-sticker">
                <strong>${route.id}-${String(item.sequence).padStart(2, "0")}</strong>
                <span>${escapeHtml(item.id)} / ${escapeHtml(item.owner)}</span>
                <span>${escapeHtml(item.temperature)} / ${round(item.weight)}kg / ${item.pieces}件</span>
                <span>${escapeHtml(item.area)} / ${escapeHtml(item.recipient)}</span>
                <span>${escapeHtml(item.address)}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function copyDriverLink() {
  const route = selectedRoute();
  if (!route) {
    showToast("请先选择路线");
    return;
  }
  copyText(buildDriverUrl(route), "司机H5链接已复制");
}

function buildDriverUrl(route) {
  const routeOrders = route.orders.map(getOrder).filter(Boolean);
  const payload = {
    id: route.id,
    driver: route.driver,
    temperature: route.temperature,
    orders: routeOrders
  };
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
  return `${location.origin}${location.pathname}#driver=${encoded}`;
}

function renderDriverView(encoded) {
  let payload;
  try {
    payload = JSON.parse(decodeURIComponent(escape(atob(encoded))));
  } catch {
    document.body.innerHTML = `<main class="driver-shell"><div class="empty-state">司机链接无效</div></main>`;
    return;
  }
  const sprite = document.querySelector(".sprite")?.outerHTML || "";
  document.body.className = "driver-view";
  document.body.innerHTML = `
    ${sprite}
    <main class="driver-shell">
      <section class="driver-top">
        <div>
          <h1>${escapeHtml(payload.id)} · ${escapeHtml(payload.driver.name)}</h1>
          <p>${escapeHtml(payload.driver.plate)} / ${escapeHtml(payload.temperature)} / ${payload.orders.length} 票</p>
        </div>
        <div class="mini-grid">
          <div class="mini-metric"><strong>${payload.orders.length}</strong><span>门店</span></div>
          <div class="mini-metric"><strong>${round(sum(payload.orders, "weight"))}</strong><span>kg</span></div>
          <div class="mini-metric"><strong>${sum(payload.orders, "pieces")}</strong><span>件</span></div>
        </div>
      </section>
      <section id="driverStops"></section>
    </main>
  `;
  renderDriverStops(payload);
}

function renderDriverStops(payload) {
  const shell = document.getElementById("driverStops");
  shell.innerHTML = payload.orders
    .map(
      (item) => `
        <article class="driver-stop ${item.status}" data-order-id="${escapeHtml(item.id)}">
          <div class="driver-stop-head">
            <h2>${item.sequence}. ${escapeHtml(item.recipient)} · ${escapeHtml(item.owner)}</h2>
            <span class="status ${item.status}">${statusLabels[item.status] || "待配送"}</span>
          </div>
          <p>${escapeHtml(item.address)}</p>
          <p>${escapeHtml(item.timeWindow)} / ${escapeHtml(item.temperature)} / ${round(item.weight)}kg / ${item.pieces}件 / ${escapeHtml(item.dropPoint)}</p>
          <div class="driver-actions">
            <a class="secondary" href="tel:${escapeHtml(item.phone)}">
              <svg><use href="#i-phone"></use></svg>
              <span>电话</span>
            </a>
            <a class="secondary" target="_blank" href="${amapUrl(item.address)}">
              <svg><use href="#i-nav"></use></svg>
              <span>导航</span>
            </a>
            <button class="primary" data-done="${escapeHtml(item.id)}" type="button">
              <svg><use href="#i-check"></use></svg>
              <span>签收</span>
            </button>
            <button class="ghost" data-exception="${escapeHtml(item.id)}" type="button">
              <svg><use href="#i-alert"></use></svg>
              <span>异常</span>
            </button>
          </div>
        </article>
      `
    )
    .join("");

  shell.querySelectorAll("[data-done]").forEach((button) => {
    button.addEventListener("click", () => updateDriverOrder(payload, button.dataset.done, "done"));
  });
  shell.querySelectorAll("[data-exception]").forEach((button) => {
    button.addEventListener("click", () => updateDriverOrder(payload, button.dataset.exception, "exception"));
  });
}

function updateDriverOrder(payload, id, status) {
  const item = payload.orders.find((orderItem) => orderItem.id === id);
  if (item) {
    item.status = status;
    renderDriverStops(payload);
  }
}

function selectedRoute() {
  return state.routes.find((route) => route.id === state.selectedRouteId) || state.routes[0];
}

function getOrder(id) {
  return state.orders.find((item) => item.id === id);
}

function tempTag(temp) {
  const className = temp === "常温" ? "done" : temp === "冷藏" ? "delivering" : "exception";
  return `<span class="status ${className}">${escapeHtml(temp)}</span>`;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function sum(items, key) {
  return items.reduce((total, item) => total + Number(item[key] || 0), 0);
}

function round(value) {
  return Math.round(Number(value) * 10) / 10;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function maskPhone(phone) {
  return String(phone).replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function amapUrl(address) {
  return `https://uri.amap.com/search?keyword=${encodeURIComponent(`长沙雨花 ${address}`)}`;
}

function fakeQr(seed) {
  const bits = Array.from({ length: 49 }, (_, index) => {
    const code = seed.charCodeAt(index % seed.length) + index * 17;
    return code % 3 !== 0;
  });
  return `<div class="qr" aria-label="路线码">${bits.map((on) => `<i class="${on ? "on" : ""}"></i>`).join("")}</div>`;
}

async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    showToast("复制失败，可打开H5后从地址栏复制");
  }
}

function showToast(message, type = "success") {
  els.toast = els.toast || $("toast");
  els.toast.textContent = message;
  els.toast.className = type === "error" ? "show error" : "show";
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2200);
}

// 只在浏览器环境初始化
if (typeof window !== 'undefined') {
  init();
}
