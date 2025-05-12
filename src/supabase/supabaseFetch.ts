import { supabaseClient } from "./supabaseClient";

export async function fetchUser() {
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  if (user) {
    return user;
  } else {
    console.error("trying to fetch user, user does not exist");
    return null;
  }
}

// fetch id from profiles
export async function fetchIDFromProfiles() {
  const user = await fetchUser();
  if (!user) {
    console.error("tring to fetch name, user does not exist");
    return null;
  }

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("id")
    .eq("id", user.id)
    .single();

  if (error || !data) {
    return null;
  }
  return data.id; // User exists, return id
}

// fetch name from profiles
export async function fetchNameFromProfiles() {
  const user = await fetchUser();
  if (!user) {
    console.error("tring to fetch name, user does not exist");
    return null;
  }

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("name")
    .eq("id", user.id)
    .single();
  if (error || !data) {
    console.log("cannot fetch from table", error);
    return null;
  }
  return data.name; //User exists, return name
}
