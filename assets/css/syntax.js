import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "highlight": {
        "position": "relative",
        "background": "#272822",
        "color": "#f2f0df"
    },
    "highlight > pre": {
        "overflowX": "scroll"
    },
    "highlight code": {
        "paddingLeft": 48
    },
    "highlight c": {
        "color": "#999988",
        "fontStyle": "italic"
    },
    "highlight err": {
        "color": "#a61717",
        "backgroundColor": "#e3d2d2"
    },
    "highlight k": {
        "fontWeight": "bold",
        "color": "#ff0080"
    },
    "highlight o": {
        "fontWeight": "bold"
    },
    "highlight cm": {
        "color": "#999988",
        "fontStyle": "italic"
    },
    "highlight cp": {
        "color": "#999999",
        "fontWeight": "bold"
    },
    "highlight c1": {
        "color": "#999988",
        "fontStyle": "italic"
    },
    "highlight cs": {
        "color": "#999999",
        "fontWeight": "bold",
        "fontStyle": "italic"
    },
    "highlight gd": {
        "color": "#000000",
        "backgroundColor": "#ffdddd"
    },
    "highlight gd x": {
        "color": "#000000",
        "backgroundColor": "#ffaaaa"
    },
    "highlight ge": {
        "fontStyle": "italic"
    },
    "highlight gr": {
        "color": "#aa0000"
    },
    "highlight gh": {
        "color": "#999999"
    },
    "highlight gi": {
        "color": "#000000",
        "backgroundColor": "#ddffdd"
    },
    "highlight gi x": {
        "color": "#000000",
        "backgroundColor": "#aaffaa"
    },
    "highlight gl": {
        "position": "absolute",
        "backgroundColor": "#39382e",
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8,
        "color": "#bebec5",
        "borderRight": "1px solid #ddd"
    },
    "highlight go": {
        "color": "#888888"
    },
    "highlight gp": {
        "color": "#555555"
    },
    "highlight gs": {
        "fontWeight": "bold"
    },
    "highlight gu": {
        "color": "#aaaaaa"
    },
    "highlight gt": {
        "color": "#aa0000"
    },
    "*/highlight kd": {
        "fontWeight": "bold"
    },
    "highlight kp": {
        "fontWeight": "bold"
    },
    "highlight kr": {
        "fontWeight": "bold",
        "color": "#6ce26c"
    },
    "highlight kt": {
        "color": "#445588",
        "fontWeight": "bold"
    },
    "highlight m": {
        "color": "#009999"
    },
    "highlight s": {
        "color": "#d14"
    },
    "highlight na": {
        "color": "#08ffff"
    },
    "highlight nb": {
        "color": "#0086B3"
    },
    "highlight nc": {
        "color": "#445588",
        "fontWeight": "bold"
    },
    "highlight no": {
        "color": "#008080"
    },
    "highlight ni": {
        "color": "#800080"
    },
    "highlight ne": {
        "color": "#990000",
        "fontWeight": "bold"
    },
    "highlight nf": {
        "color": "#990000",
        "fontWeight": "bold"
    },
    "highlight nn": {
        "color": "#555555"
    },
    "highlight nt": {
        "color": "#000080"
    },
    "highlight nv": {
        "color": "#008080"
    },
    "highlight ow": {
        "fontWeight": "bold"
    },
    "highlight w": {
        "color": "#bbbbbb"
    },
    "highlight mf": {
        "color": "#009999"
    },
    "highlight mh": {
        "color": "#009999"
    },
    "highlight mi": {
        "color": "#009999"
    },
    "highlight mo": {
        "color": "#009999"
    },
    "highlight sb": {
        "color": "#d14"
    },
    "highlight sc": {
        "color": "#d14"
    },
    "highlight sd": {
        "color": "#d14"
    },
    "highlight s2": {
        "color": "#d14"
    },
    "highlight se": {
        "color": "#d14"
    },
    "highlight sh": {
        "color": "#d14"
    },
    "highlight si": {
        "color": "#d14"
    },
    "highlight sx": {
        "color": "#d14"
    },
    "highlight sr": {
        "color": "#009926"
    },
    "highlight s1": {
        "color": "#d14"
    },
    "highlight ss": {
        "color": "#990073"
    },
    "highlight bp": {
        "color": "#999999"
    },
    "highlight vc": {
        "color": "#008080"
    },
    "highlight vg": {
        "color": "#008080"
    },
    "highlight vi": {
        "color": "#008080"
    },
    "highlight il": {
        "color": "#009999"
    },
    "highlighter-rouge": {
        "overflowX": "auto"
    },
    "highlighter-rouge highlight": {
        "backgroundColor": "inherit",
        "color": "inherit",
        "marginTop": 16
    }
});