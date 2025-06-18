import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#eee",
    padding: 5,
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    padding: 5,
    borderBottom: "1px solid #ccc",
  },
  col: {
    width: "20%",
  },
  colWide: {
    width: "40%",
  },
  footer: {
    marginTop: 30,
    textAlign: "center",
    fontStyle: "italic",
  },
});

// Invoice PDF Component
export default function InvoiceDocument({ order }) {
  const date = new Date(order.created_at).toLocaleDateString();
  const SHIPPING_CHARGE = 50;

  const subtotal = order.order_item.reduce((acc, item) => acc + parseFloat(item.grand_total), 0);
  const discount = order.discount || 0;
  const total = subtotal - discount + SHIPPING_CHARGE;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Invoice #{order.unique_id}</Text>

        {/* Customer and Order Info */}
        <View style={styles.section}>
          <Text><Text style={styles.label}>Customer:</Text> {order?.shippings[0]?.name}</Text>
          <Text><Text style={styles.label}>Email:</Text> {order?.shippings[0]?.email}</Text>
          <Text><Text style={styles.label}>Date:</Text> {date}</Text>
          <Text><Text style={styles.label}>Payment Status:</Text> {order.payment_status}</Text>
          <Text><Text style={styles.label}>Payment Method:</Text> {order.transactions?.[0]?.payment_method || "N/A"}</Text>
          <Text><Text style={styles.label}>Promo Code:</Text> {order.promo_code || "N/A"}</Text>
        </View>

        {/* Items Table */}
        <View style={styles.section}>
          <Text style={{ fontSize: 14, marginBottom: 5, fontWeight: "bold" }}>Order Items</Text>

          <View style={styles.tableHeader}>
            <Text style={styles.colWide}>Product</Text>
            <Text style={styles.col}>Qty</Text>
            <Text style={styles.col}>Unit Price</Text>
            <Text style={styles.col}>Total</Text>
          </View>

          {order?.order_item?.map((item, idx) => (
            <View key={idx} style={styles.tableRow}>
              <Text style={styles.colWide}>{item.item_name}</Text>
              <Text style={styles.col}>{item.quantity}</Text>
              <Text style={styles.col}>{item.current_price}</Text>
              <Text style={styles.col}>{item.grand_total}</Text>
            </View>
          ))}
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <View style={styles.row}>
            <Text>Subtotal:</Text>
            <Text>{subtotal}</Text>
          </View>
          <View style={styles.row}>
            <Text>Discount:</Text>
            <Text>{discount}</Text>
          </View>
          <View style={styles.row}>
            <Text>Shipping Charge:</Text>
            <Text>{SHIPPING_CHARGE}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Total:</Text>
            <Text style={styles.label}>{total}</Text>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>Thank you for shopping with us!</Text>
      </Page>
    </Document>
  );
}
