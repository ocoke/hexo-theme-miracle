function loadScript(isAsync, url, cb, isMoudule) {
    let script = document.createElement('script');
    script.src = url;
    if (cb) script.onload = cb;
    if (isMoudule) script.type = 'module';
    if (!isAsync) { isAsync = true };
    script.async = isAsync;
    document.body.appendChild(script);
}
/**
 * loadScriptFile
 * option: object
 * url: script 地址
 * cb: script onload 事件
 * module: 是否为模块
 * loadType: async/defer
 * TIP: 这是对 loadScript() 的 Breaking Changes.
 */
function loadScriptFile(option) {
    let script = document.createElement('script');
    script.src = option.url;
    if (option.cb) script.onload = option.cb;
    if (option.module) script.type = 'module';
    script[option.loadType] = true;
    document.body.appendChild(script);
}
/**
 * 选择器
 * query(".class") => <div class="class"></div>
 * query("#id") => <div id="id"></div>
 * query("label") => <label></label>
 */
function query(selector) {
    return Array.from(document.querySelectorAll(selector));
}
/**
 * addClass
 * e: CSS 选择器
 * c: 添加的 Class，可为 string / object
 */
function addClass(e, c) {
    // 对 element 进行遍历
    for (let i = 0; i < query(e).length; i++) {
        if (typeof c == "object") {
            // 如果给了一个 object: ["class1", "class2"]
            for (let o = 0; o < c.length; o++) {
                query(e)[i].classList.add(c[o]);
            }
        } else {
            // 其他的格式: "class"
            query(e)[i].classList.add(c);
        }
    }
}
/**
 * removeClass
 * e: CSS 选择器
 * c: 删除的 Class，可为 string / object
 */
function removeClass(e, c) {
    // 对 element 进行遍历
    for (let i = 0; i < query(e).length; i++) {
        if (typeof c == "object") {
            // 如果给了一个 object: ["class1", "class2"]
            for (let o = 0; o < c.length; o++) {
                query(e)[i].classList.remove(c[o]);
            }
        } else {
            // 其他的格式: "class"
            query(e)[i].classList.remove(c);
        }
    }
}
/**
 * inArray
 * 检索 String 是否存在于 Array 中
 * stringToSearch: String
 * arrayToSearch: Array
 */
function inArray(stringToSearch, arrayToSearch) {
    for (s = 0; s < arrayToSearch.length; s++) {
        thisEntry = arrayToSearch[s].toString();
        if (thisEntry == stringToSearch) {
            return true;
        }
    }
    return false;
}
/**
 * toggleClass
 * e: CSS 选择器
 * c: 切换的 Class，可为 string / object
 */
function toggleClass(e, c) {
    // 对 element 进行遍历
    for (let i = 0; i < query(e).length; i++) {
        if (typeof c == "object") {
            // 如果给了一个 object: ["class1", "class2"]
            for (let o = 0; o < c.length; o++) {
                inArray(c[o], query(e)[i].classList) ? removeClass(e, c[o]) : addClass(e, c[o]);
            }
        } else {
            inArray(c, query(e)[i].classList) ? removeClass(e, c) : addClass(e, c);
        }
    }
}

/**
 * Darkmode
 */
(() => {
    const rootElement = document.documentElement;
    const darkModeStorageKey = 'user-color-scheme';
    const darkModeMediaQueryKey = '--color-mode';
    const rootElementDarkModeAttributeName = 'data-theme';

    const setLS = (k, v) => {
        try {
            localStorage.setItem(k, v);
        } catch (e) { }
    };

    const removeLS = (k) => {
        try {
            localStorage.removeItem(k);
        } catch (e) { }
    };

    const getLS = (k) => {
        try {
            return localStorage.getItem(k);
        } catch (e) {
            return null;
        }
    };

    const getModeFromCSSMediaQuery = () => {
        const res = getComputedStyle(rootElement).getPropertyValue(darkModeMediaQueryKey);
        if (res.length) return res.replace(/["'\s]/g, '');
        return res === 'dark' ? 'dark' : 'light';
    };

    const resetRootDarkModeAttributeAndLS = () => {
        rootElement.removeAttribute(rootElementDarkModeAttributeName);
        removeLS(darkModeStorageKey);
    };

    const validColorModeKeys = {
        dark: true,
        light: true,
    };

    const applyCustomDarkModeSettings = (mode) => {
        const currentSetting = mode || getLS(darkModeStorageKey);

        if (currentSetting === getModeFromCSSMediaQuery()) {
            resetRootDarkModeAttributeAndLS();
        } else if (validColorModeKeys[currentSetting]) {
            rootElement.setAttribute(rootElementDarkModeAttributeName, currentSetting);

        } else {
            resetRootDarkModeAttributeAndLS();
        }
    };

    const invertDarkModeObj = {
        dark: 'light',
        light: 'dark',
    };

    const toggleCustomDarkMode = () => {
        var currentSetting = getLS(darkModeStorageKey);

        if (validColorModeKeys[currentSetting]) {
            currentSetting = invertDarkModeObj[currentSetting];
        } else if (currentSetting === null) {
            currentSetting = invertDarkModeObj[getModeFromCSSMediaQuery()];
        } else {
            return;
        }
        setLS(darkModeStorageKey, currentSetting);

        return currentSetting;
    };

    applyCustomDarkModeSettings();

    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            const darkModeToggleBottonElement = document.getElementById('btn-toggle-dark');
            darkModeToggleBottonElement.addEventListener('click', () => {
                applyCustomDarkModeSettings(toggleCustomDarkMode());
            });
        }
    }
})();