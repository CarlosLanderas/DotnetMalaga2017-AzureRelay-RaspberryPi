import { TweetViewModel } from './tweetViewModel';
import * as ko from 'knockout';

declare var relayToken: any;

let tweetViewModel = new TweetViewModel();

ko.applyBindings(tweetViewModel);

let ws = new WebSocket(`wss://relaymalaga.servicebus.windows.net:443/$hc/relay01?
    sb-hc-action=connect&sb-hc-token=${relayToken}`);

ws.onmessage = function (event) {
    tweetViewModel.addTweet(JSON.parse(event.data));
};
