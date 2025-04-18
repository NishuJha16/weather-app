import service from ".";

export const getCurrentDayData = async (params: any) => {
  try {
    const response = await service.get("forecast", { params: params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
