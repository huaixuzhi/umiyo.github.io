import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "lineHeight": 1.6,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "boxSizing": "border-box"
    },
    "body": {
        "display": "table-cell",
        "verticalAlign": "middle",
        "marginTop": 2,
        "marginRight": "auto",
        "marginBottom": 2,
        "marginLeft": "auto"
    },
    "box": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 40,
        "paddingRight": 40,
        "paddingBottom": 40,
        "paddingLeft": 40,
        "backgroundColor": "#fff",
        "width": 540
    },
    "clearfix:before": {
        "content": "\" \",attr()",
        "display": "table"
    },
    "clearfix:after": {
        "content": "\" \",attr()",
        "display": "table"
    }
});