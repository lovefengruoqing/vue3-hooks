import { onUnmounted, ref } from 'vue';

/**
 * 执行倒计时的 hooks
 * @param {Number} total 总时长
 * @return Object
 */
export const useCountdown = (total = 60) => {
  const current = ref(0);

  let timer;
  const start = () => {
    current.value = total;
    timer = setInterval(() => {
      if (current.value === 0) {
        clearInterval(timer);
      } else {
        current.value -= 1;
      }
    }, 1000);
  };

  onUnmounted(() => {
    clearInterval(timer);
  });

  return { current, start };
};
