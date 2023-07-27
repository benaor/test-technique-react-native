import { useState, useEffect } from "react";
import { Linking, Alert } from "react-native";
import * as Permissions from "expo-permissions";
import { router } from "expo-router";

export function useCameraPermission() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      switch (status) {
        case "granted":
          return setHasPermission(true);

        case "denied":
          setHasPermission(false);
          return alertNeedCameraPermission();

        case "undetermined":
          return setHasPermission(false);
      }
    })();
  }, []);

  return hasPermission;
}

const alertNeedCameraPermission = () =>
  Alert.alert(
    "Accès à la caméra",
    "Pour fonctionner, cette application a besoin d'accéder à votre caméra. Voulez-vous ouvrir les paramètres et autoriser l'accès ?",
    [
      {
        text: "Open Settings",
        onPress: () => {
          Linking.openSettings();
        },
      },
      {
        text: "Cancel",
        style: "cancel",
        onPress: () => {
          router.push("/gallery");
        },
      },
    ]
  );
