
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import qs from 'qs';
import fetch from "node-fetch";
import HttpsProxyAgent from 'https-proxy-agent';
const getHeader = () => {
    const ACCESS_KEY = "*****";
    const ACCESS_SECRET = "**************";
    const nonce = uuidv4();
    const timestamp = Math.round(new Date().getTime() / 1000);
    const shaSum = crypto.createHash("sha1");
    const _list = [ACCESS_SECRET, timestamp, nonce];
    _list.sort();
    shaSum.update(_list.join(""));
    const signature = shaSum.digest("hex");

    return {
        "X-AccessKey": ACCESS_KEY,
        "X-Signature": signature,
        "X-Timestamp": timestamp,
        "X-Nonce": nonce,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    };
};
const sendRequest = () => {
    const url = 'xxx';
    const headers = getHeader();
    const body = qs.stringify({
        project_id: 'xxxx',
        object_id: 'xxxx',
        object_data: JSON.stringify({ /*标注数据*/}),
    });
    fetch(url, {
        method: 'POST',
        headers,
        body,
        redirect: 'follow',
        timeout: 10000, // 超时
        // agent: new HttpsProxyAgent("http://127.0.0.1:8888") // 代理请求到本地，方便charles抓包查看
    }).then((res) => {
        console.log("Response Headers ============ ");
        res.headers.forEach((v, i) => {
            console.log(i + " : " + v);
        });
        return res.text();
    }).then((res) => {
        console.log("Response Body ============ ");
        console.log(res);
    }).catch((err) => {
        console.log("Error ============ ");
        console.log(err);
    });
};
