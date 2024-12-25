import { ref } from 'vue';

export const useActive = (defaultVal) => {
  const active = ref(defaultVal);

  const setActive = (val) => {
    active.value = val;
  };

  return { active, setActive };
};
