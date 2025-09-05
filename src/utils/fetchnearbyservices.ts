export async function fetchNearbyServices(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject("Geolocation is not supported by your browser");
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://neighbourly-2-k562.onrender.com/services?lat=${latitude}&lng=${longitude}`
          );
          if (!res.ok) throw new Error("Failed to fetch services");
          const data = await res.json();
          resolve(data);
        } catch (err) {
          reject(err);
        }
      },
      (error) => reject(error.message)
    );
  });
}
