const URL = `${process.env.NEXT_PUBLIC_API_URL}/sliders`;

export async function getSliders() {
  const res = await fetch(`${URL}`);
  if (!res.ok) {
    throw new Error("FAILED_FETCH_SLIDERS");
  }
  return res.json();
}
