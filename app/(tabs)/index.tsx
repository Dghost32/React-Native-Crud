import { Image, Pressable, StyleSheet, TextInput } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import Button from "@/components/Button";
import useCustomers from "@/hooks/useCustomers";

const HomeScreen: React.FC = () => {
  const color = useThemeColor({}, "text");
  const { customers, addCustomer, deleteCustomer } = useCustomers();

  const [name, setName] = useState<string>("");

  useEffect(() => {
    console.log("color", color);
  }, [color]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: "#A1CEDC",
        dark: "#1D3D47",
      }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Little Lemon Customers !</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Add Customers!</ThemedText>
        <TextInput
          style={{
            ...styles.input,
            ...{ color: color ?? "#ffff" },
          }}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <Button
          text="Add Customer"
          onPress={() => {
            addCustomer(name);
          }}
        />
      </ThemedView>

      <ThemedView
        style={{
          ...styles.titleContainer,
          flexDirection: "column",
          alignItems: "baseline",
        }}
      >
        <ThemedText type="subtitle">Customers:</ThemedText>

        {customers?.map((customer, index) => (
          <Pressable
            key={index}
            onPress={() => deleteCustomer(customer)}
            style={{
              flex: 1,
            }}
          >
            <ThemedText>X {customer}</ThemedText>
          </Pressable>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  input: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
  },
});

export default HomeScreen;
