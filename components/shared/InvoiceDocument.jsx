import React from "react"
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
})

export default function InvoiceDocument({ order }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Invoice - #{order.id}</Text>

        <View style={styles.section}>
          <Text>Customer: John Doe</Text>
          <Text>Email: john@example.com</Text>
          <Text>Date: {order.date}</Text>
        </View>

        <View style={styles.section}>
          <Text style={{ marginBottom: 5 }}>Order Summary:</Text>
          <View style={styles.row}>
            <Text>Status:</Text>
            <Text>{order.status}</Text>
          </View>
          <View style={styles.row}>
            <Text>Total:</Text>
            <Text>${order.total}</Text>
          </View>
        </View>

        <Text>Thank you for your order!</Text>
      </Page>
    </Document>
  )
}
