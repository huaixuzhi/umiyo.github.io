import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "highlight": {},
    "highlight line-numbers pre": {
        "color": "#93a1a1"
    },
    "highlight c": {
        "color": "#93a1a1",
        "fontStyle": "italic"
    },
    "highlight cm": {
        "color": "#93a1a1",
        "fontStyle": "italic"
    },
    "highlight cp": {
        "color": "#93a1a1",
        "fontStyle": "italic"
    },
    "highlight c1": {
        "color": "#93a1a1",
        "fontStyle": "italic"
    },
    "highlight cs": {
        "color": "#93a1a1",
        "fontStyle": "italic",
        "fontWeight": "bold"
    },
    "highlight err": {
        "background": "none",
        "color": "#dc322f"
    },
    "highlight k": {
        "color": "#cb4b16"
    },
    "highlight o": {
        "color": "#586e75",
        "fontWeight": "bold"
    },
    "highlight p": {
        "color": "#586e75"
    },
    "highlight ow": {
        "color": "#2aa198",
        "fontWeight": "bold"
    },
    "highlight gd": {
        "backgroundColor": "#f3c8c8",
        "color": "#586e75",
        "display": "inline-block"
    },
    "highlight gd x": {
        "backgroundColor": "#f0b4b3",
        "color": "#586e75",
        "display": "inline-block"
    },
    "highlight ge": {
        "color": "#586e75",
        "fontStyle": "italic"
    },
    "highlight gh": {
        "color": "#93a1a1"
    },
    "highlight gi": {
        "backgroundColor": "#e3e7c8",
        "color": "#586e75",
        "display": "inline-block"
    },
    "highlight gi x": {
        "backgroundColor": "#cbd396",
        "color": "#586e75",
        "display": "inline-block"
    },
    "highlight gs": {
        "color": "#586e75",
        "fontWeight": "bold"
    },
    "highlight gu": {
        "color": "#6c71c4"
    },
    "highlight kc": {
        "color": "#859900",
        "fontWeight": "bold"
    },
    "highlight kd": {
        "color": "#268bd2"
    },
    "highlight kp": {
        "color": "#cb4b16",
        "fontWeight": "bold"
    },
    "highlight kr": {
        "color": "#d33682",
        "fontWeight": "bold"
    },
    "highlight kt": {
        "color": "#2aa198"
    },
    "highlight n": {
        "color": "#268bd2"
    },
    "highlight na": {
        "color": "#268bd2"
    },
    "highlight nb": {
        "color": "#859900"
    },
    "highlight nc": {
        "color": "#d33682"
    },
    "highlight no": {
        "color": "#b58900"
    },
    "highlight nl": {
        "color": "#859900"
    },
    "highlight ne": {
        "color": "#268bd2",
        "fontWeight": "bold"
    },
    "highlight nf": {
        "color": "#268bd2",
        "fontWeight": "bold"
    },
    "highlight nn": {
        "color": "#b58900"
    },
    "highlight nt": {
        "color": "#268bd2",
        "fontWeight": "bold"
    },
    "highlight nx": {
        "color": "#b58900 !important"
    },
    "highlight vg": {
        "color": "#268bd2"
    },
    "highlight vi": {
        "color": "#268bd2"
    },
    "highlight nv": {
        "color": "#268bd2"
    },
    "highlight mf": {
        "color": "#2aa198"
    },
    "highlight m": {
        "color": "#2aa198"
    },
    "highlight mh": {
        "color": "#2aa198"
    },
    "highlight mi": {
        "color": "#2aa198"
    },
    "highlight s": {
        "color": "#2aa198"
    },
    "highlight sd": {
        "color": "#2aa198"
    },
    "highlight s2": {
        "color": "#2aa198"
    },
    "highlight se": {
        "color": "#dc322f"
    },
    "highlight si": {
        "color": "#268bd2"
    },
    "highlight sr": {
        "color": "#2aa198"
    },
    "highlight s1": {
        "color": "#2aa198"
    }
});