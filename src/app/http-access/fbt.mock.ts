export interface PredictionPoint {
  id: number;
  time: string;  // "HH:mm"
  probability: number; // 0 - 100
  rootCause?: string;
  solution?: string;
}

/**
 * Mock API: Get prediction data
 * - From 2 hours ago to 30 minutes ahead
 * - Every 5 minutes (aligned to nearest 5-minute mark)
 * @returns PredictionPoint[]
 */
export function mockPredictionDataAligned(): PredictionPoint[] {
  const stepMinutes = 5;     // bước 5 phút
  const historyMinutes = 120; // 2 giờ
  const futureMinutes = 30;   // 30 phút
  const now = new Date();

  // Align start time: giảm phút về bội số nhỏ nhất chia hết cho 5
  const startTime = new Date(now.getTime() - historyMinutes * 60 * 1000);
  startTime.setMinutes(Math.floor(startTime.getMinutes() / stepMinutes) * stepMinutes);
  startTime.setSeconds(0);
  startTime.setMilliseconds(0);

  // Align end time: tăng phút về bội số chia hết cho 5 lớn hơn hiện tại + 30 phút
  const endTime = new Date(now.getTime() + futureMinutes * 60 * 1000);
  endTime.setMinutes(Math.ceil(endTime.getMinutes() / stepMinutes) * stepMinutes);
  endTime.setSeconds(0);
  endTime.setMilliseconds(0);

  const results: PredictionPoint[] = [];
  let currentTime = new Date(startTime);

  while (currentTime <= endTime) {
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    const probability = Math.floor(Math.random() * 101);

    results.push({
      id: results.length,
      time: formattedTime,
      probability: probability,
      rootCause: 'Nguyên nhân: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });

    // Next 5 minutes
    currentTime = new Date(currentTime.getTime() + stepMinutes * 60 * 1000);
  }

  return results;
}
