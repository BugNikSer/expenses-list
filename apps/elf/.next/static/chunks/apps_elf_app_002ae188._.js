(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/elf/app/components/Select/Option.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.1_@emotion+react@11.14.0_@types+react@19.1.11_react@19.1.0__@emotion+_a423873b386f32719e705dfd2473df14/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.1_@emotion+react@11.14.0_@types+react@19.1.11_react@19.1.0__@emotion+_a423873b386f32719e705dfd2473df14/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
;
var _s = __turbopack_context__.k.signature();
;
;
function SelectOption(param) {
    let { option, value, onClick } = param;
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SelectOption.useMemo[id]": ()=>option.id
    }["SelectOption.useMemo[id]"], [
        option
    ]);
    const isSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SelectOption.useMemo[isSelected]": ()=>{
            if (Array.isArray(value)) {
                return value.includes(id);
            }
            return value === id;
        }
    }["SelectOption.useMemo[isSelected]"], [
        value,
        option
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
        onClick: ()=>onClick(id),
        selected: isSelected,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
            children: option.label
        }, void 0, false, {
            fileName: "[project]/apps/elf/app/components/Select/Option.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/elf/app/components/Select/Option.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(SelectOption, "AZyBeUXCc7Ae+37uuLCYglXXnvU=");
_c = SelectOption;
const __TURBOPACK__default__export__ = SelectOption;
var _c;
__turbopack_context__.k.register(_c, "SelectOption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/elf/app/components/Select/Select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.1_@emotion+react@11.14.0_@types+react@19.1.11_react@19.1.0__@emotion+_a423873b386f32719e705dfd2473df14/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popper$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.1_@emotion+react@11.14.0_@types+react@19.1.11_react@19.1.0__@emotion+_a423873b386f32719e705dfd2473df14/node_modules/@mui/material/esm/Popper/Popper.js [app-client] (ecmascript) <export default as Popper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Backdrop$2f$Backdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Backdrop$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.1_@emotion+react@11.14.0_@types+react@19.1.11_react@19.1.0__@emotion+_a423873b386f32719e705dfd2473df14/node_modules/@mui/material/esm/Backdrop/Backdrop.js [app-client] (ecmascript) <export default as Backdrop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuList$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.1_@emotion+react@11.14.0_@types+react@19.1.11_react@19.1.0__@emotion+_a423873b386f32719e705dfd2473df14/node_modules/@mui/material/esm/MenuList/MenuList.js [app-client] (ecmascript) <export default as MenuList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.1_@emotion+react@11.14.0_@types+react@19.1.11_react@19.1.0__@emotion+_a423873b386f32719e705dfd2473df14/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.1_@emotion+react@11.14.0_@types+react@19.1.11_react@19.1.0__@emotion+_a423873b386f32719e705dfd2473df14/node_modules/@mui/material/esm/Chip/Chip.js [app-client] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.1_@emotion+react@11.14.0_@types+react@19.1.11_react@19.1.0__@emotion+_a423873b386f32719e705dfd2473df14/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.1_@emotion+react@11.14.0_@types+react@19.1.11_react@19.1.0__@emotion+_a423873b386f32719e705dfd2473df14/node_modules/@mui/material/esm/Input/Input.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$icons$2d$material$40$7$2e$3$2e$1_$40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$_abb91f5ad581230e613445e7e2ff97ff$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloseRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+icons-material@7.3.1_@mui+material@7.3.1_@emotion+react@11.14.0_@types+react@19.1._abb91f5ad581230e613445e7e2ff97ff/node_modules/@mui/icons-material/esm/CloseRounded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$icons$2d$material$40$7$2e$3$2e$1_$40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$_abb91f5ad581230e613445e7e2ff97ff$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SearchRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+icons-material@7.3.1_@mui+material@7.3.1_@emotion+react@11.14.0_@types+react@19.1._abb91f5ad581230e613445e7e2ff97ff/node_modules/@mui/icons-material/esm/SearchRounded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$elf$2f$app$2f$components$2f$Select$2f$Option$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/elf/app/components/Select/Option.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Select(param) {
    let { options, filterable, multiple, clearable, value, onChange, placeholder = "Выберите значение" } = param;
    _s();
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filterValue, setFilterValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleOptionCLick = (id)=>{
        if (multiple) {
            if (!value || !Array.isArray(value)) {
                onChange([
                    id
                ]);
            } else {
                const optionValueIndex = value.indexOf(id);
                if (optionValueIndex === -1) {
                    onChange([
                        ...value,
                        id
                    ]);
                } else {
                    onChange(value.toSpliced(optionValueIndex, 1));
                }
            }
        } else {
            onChange(id);
            setIsOpen(false);
        }
    };
    const handleChipDelete = (id)=>{
        if (multiple) {
            if (!Array.isArray(value) || value.length === 1) onChange(null);
            const optionValueIndex = value.indexOf(id);
            if (optionValueIndex !== -1) {
                onChange(value.toSpliced(optionValueIndex, 1));
            }
        } else {
            onChange(null);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Select.useEffect": ()=>{
            if (!isOpen) setFilterValue("");
        }
    }["Select.useEffect"], [
        isOpen
    ]);
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Select.useMemo[content]": ()=>{
            if (Array.isArray(value)) {
                if (value.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                    direction: "row",
                    gap: "4px",
                    sx: {
                        width: "100%"
                    },
                    children: value.map({
                        "Select.useMemo[content]": (valueItem)=>{
                            const option = options.find({
                                "Select.useMemo[content].option": (param)=>{
                                    let { id } = param;
                                    return id === valueItem;
                                }
                            }["Select.useMemo[content].option"]);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                label: option.label,
                                onClick: {
                                    "Select.useMemo[content]": (e)=>e.stopPropagation()
                                }["Select.useMemo[content]"],
                                onDelete: {
                                    "Select.useMemo[content]": ()=>handleChipDelete(option.id)
                                }["Select.useMemo[content]"]
                            }, void 0, false, {
                                fileName: "[project]/apps/elf/app/components/Select/Select.tsx",
                                lineNumber: 79,
                                columnNumber: 29
                            }, this);
                        }
                    }["Select.useMemo[content]"])
                }, void 0, false, {
                    fileName: "[project]/apps/elf/app/components/Select/Select.tsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this);
                return placeholder;
            }
            if (value === null || value === "") return placeholder;
            const option = options.find({
                "Select.useMemo[content].option": (param)=>{
                    let { id } = param;
                    return id === value;
                }
            }["Select.useMemo[content].option"]);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                label: option.label
            }, void 0, false, {
                fileName: "[project]/apps/elf/app/components/Select/Select.tsx",
                lineNumber: 93,
                columnNumber: 16
            }, this);
        }
    }["Select.useMemo[content]"], [
        value
    ]);
    const filteredOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Select.useMemo[filteredOptions]": ()=>{
            const filterRegExp = new RegExp(filterValue.toLowerCase());
            return options.filter({
                "Select.useMemo[filteredOptions]": (param)=>{
                    let { label } = param;
                    return filterRegExp.test(label.toLowerCase());
                }
            }["Select.useMemo[filteredOptions]"]);
        }
    }["Select.useMemo[filteredOptions]"], [
        options,
        filterValue
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                ref: buttonRef,
                variant: "outlined",
                onClick: ()=>setIsOpen(true),
                endIcon: clearable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                    size: "small",
                    onClick: (e)=>{
                        e.stopPropagation();
                        onChange(null);
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$icons$2d$material$40$7$2e$3$2e$1_$40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$_abb91f5ad581230e613445e7e2ff97ff$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloseRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/elf/app/components/Select/Select.tsx",
                        lineNumber: 116,
                        columnNumber: 29
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/apps/elf/app/components/Select/Select.tsx",
                    lineNumber: 109,
                    columnNumber: 25
                }, void 0),
                children: content
            }, void 0, false, {
                fileName: "[project]/apps/elf/app/components/Select/Select.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Backdrop$2f$Backdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Backdrop$3e$__["Backdrop"], {
                open: isOpen,
                onClick: ()=>setIsOpen(false),
                sx: (theme)=>({
                        zIndex: theme.zIndex.drawer + 1,
                        backgroundColor: "transparent"
                    }),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popper$3e$__["Popper"], {
                    anchorEl: buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current,
                    open: isOpen,
                    placement: "bottom-start",
                    sx: (theme)=>({
                            boxShadow: "0 0 8px 4px rgba(0, 0, 0, 0.3)",
                            zIndex: theme.zIndex.drawer + 2,
                            width: "300px"
                        }),
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        filterable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                            value: filterValue,
                            onChange: (e)=>setFilterValue(e.target.value),
                            sx: {
                                width: '100%'
                            },
                            startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$icons$2d$material$40$7$2e$3$2e$1_$40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$_abb91f5ad581230e613445e7e2ff97ff$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SearchRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/apps/elf/app/components/Select/Select.tsx",
                                lineNumber: 147,
                                columnNumber: 45
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/apps/elf/app/components/Select/Select.tsx",
                            lineNumber: 143,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuList$3e$__["MenuList"], {
                            sx: {
                                padding: 0
                            },
                            children: filteredOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$elf$2f$app$2f$components$2f$Select$2f$Option$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    option: option,
                                    onClick: handleOptionCLick,
                                    value: value
                                }, option.id, false, {
                                    fileName: "[project]/apps/elf/app/components/Select/Select.tsx",
                                    lineNumber: 152,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/elf/app/components/Select/Select.tsx",
                            lineNumber: 150,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/elf/app/components/Select/Select.tsx",
                    lineNumber: 131,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/elf/app/components/Select/Select.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Select, "x4fVKRS/hiraQFE24HiwOiap5AY=");
_c = Select;
const __TURBOPACK__default__export__ = Select;
var _c;
__turbopack_context__.k.register(_c, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/elf/app/components/Select/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$elf$2f$app$2f$components$2f$Select$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/elf/app/components/Select/Select.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/elf/app/components/Select/Select.tsx [app-client] (ecmascript) <export default as Select>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$elf$2f$app$2f$components$2f$Select$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$elf$2f$app$2f$components$2f$Select$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/elf/app/components/Select/Select.tsx [app-client] (ecmascript)");
}),
"[project]/apps/elf/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$elf$2f$app$2f$components$2f$Select$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/elf/app/components/Select/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$elf$2f$app$2f$components$2f$Select$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/apps/elf/app/components/Select/Select.tsx [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.1_@emotion+react@11.14.0_@types+react@19.1.11_react@19.1.0__@emotion+_a423873b386f32719e705dfd2473df14/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            console.log({
                value
            });
        }
    }["Home.useEffect"], [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$1_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$1$2e$11_react$40$19$2e$1$2e$0_$5f40$emotion$2b$_a423873b386f32719e705dfd2473df14$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$elf$2f$app$2f$components$2f$Select$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
            value: value,
            options: [
                {
                    id: 1,
                    label: "One"
                },
                {
                    id: 2,
                    label: "Two"
                },
                {
                    id: 3,
                    label: "Three"
                },
                {
                    id: 4,
                    label: "Four"
                },
                {
                    id: 5,
                    label: "Five"
                }
            ],
            onChange: (v)=>{
                console.log("onChange", v);
                setValue(v);
            },
            multiple: true,
            clearable: true,
            filterable: true
        }, void 0, false, {
            fileName: "[project]/apps/elf/app/page.tsx",
            lineNumber: 13,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/elf/app/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Home, "QNA6AqGJKsyY0NGOv8Nup0fReMk=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_elf_app_002ae188._.js.map