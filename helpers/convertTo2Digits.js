export default function convertTo2Digits (index) {
    if (index.toString().length < 2) {
        return '0' + index
    }
    return index
}