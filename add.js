function isPrime(number) {
    if (number == 2){
        return true
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        }
    }

    return true
}

const numbers=[4,6,8,10,7];

console.log(numbers.filter(isPrime))



function groupNotificationsBySource(notifacations) {
   
    const map = new Map()
 
    notifacations.forEach(notifacations => {
        const source = notifacations.source
        if (!map.has(source)) {
            map.set(source, []);
        }
        map.get(source).push(notifacations)
    });
return Object.fromEntries(map)
}

const notifications = [
    { source: 'email', text: 'You have a new email', date: '2021-06-01' },
    { source: 'sms', text: 'New SMS message', date: '2020-06-02' },
    { source: 'email', text: 'Another email', date: '2021-08-03' },
    { source: 'push', text: 'Push notification', date: '2022-07-04' },
    { source: 'sms', text: 'Another SMS message', date: '2022-05-05' }
];
const groupedNotifications = groupNotificationsBySource(notifications);

console.log(JSON.stringify(groupedNotifications, null, 4));
 

function printObject(obj) {
    console.log(JSON.stringify(obj, null, 4))
}


function groupArray(arr) {
    return Object.values(arr.reduce((acc, curr) => {
        acc[curr] = acc[curr] || [];
        acc[curr].push(curr);
        return acc;
    }, {}));
}


const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const result = groupArray(arr);
printObject(result);
