export async function getSliders() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sliders`);
  if (!res.ok) {
    throw new Error("FAILED_FETCH_SLIDERS");
  }
  return res.json();
}
