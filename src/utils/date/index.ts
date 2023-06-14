import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime);

export const getDayFrom = (date:Date) => {
    return dayjs(new Date(date)).fromNow()
}   