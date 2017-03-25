import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "ul": {
        "listStyle": "none"
    },
    "a": {
        "WebkitTapHighlightColor": "transparent",
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none"
    },
    "input": {
        "WebkitTapHighlightColor": "transparent",
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none"
    }
});