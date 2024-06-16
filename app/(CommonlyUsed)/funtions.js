
export function militaryToStandard(hour, minute) {

    const suffix = hour >= 12 ? 'PM': 'AM';

    // COnvert hour from 24-hour to 12-hour format
    hour = hour % 12 || 12;

    minute = minute.toString().padStart(2, '0')

    return `${hour}:${minute} ${suffix}`
}