# Functional Requirements Document (FRD)

# Shopping App – Single Store (User Application)

---

# 1. Project Overview

## 1.1 Project Name

Single Store Shopping Application – User App

## 1.2 Project Goal

Build a customer-facing online shopping application for a single store where users can browse products, add items to cart, place orders, and receive home delivery.

## 1.3 Project Scope

This document defines the functional requirements for the **User Application** of a single-store eCommerce system. The system enables customers to create accounts, browse products, manage carts, place orders, and receive order updates via email.

The scope of this project currently includes:

• User authentication
• Profile management
• Product browsing
• Shopping cart
• Checkout and payment
• Order tracking
• Email notifications

The following components are **out of scope for this phase**:

• Admin dashboard
• Delivery management system
• Inventory management interface
• Coupon systems

These may be implemented in later phases.

---

# 2. User Roles

## 2.1 Customer (Primary User)

Customers are users who browse products and purchase items from the store.

Customers can:

• Register and login
• Manage their profile
• Manage delivery addresses
• Browse products
• Search and filter products
• Add products to cart
• Place orders
• Pay online using Razorpay or select Cash on Delivery
• Track order status

---

# 3. Functional Requirements

---

# 3.1 User Authentication

## Description

Allows users to create accounts, log in, and recover their passwords.

## Functional Requirements

### FR-1 User Signup

The system shall allow new users to create an account.

User must provide:

• Name
• Email address
• Password
• Phone number

System behaviour:

• Email must be unique
• Password must be securely stored
• A welcome email shall be sent after successful signup

### FR-2 User Login

Users shall be able to log into the system using:

• Email
• Password

System behaviour:

• Validate credentials
• Redirect user to home page after login

### FR-3 Google Login (Optional)

Users may log in using Google authentication.

System behaviour:

• If the user logs in for the first time, the system creates a new user account using Google profile information (name and email).
• After successful Google authentication, the user shall be redirected to a **Phone Number Collection page** if a phone number is not available.
• The user must enter their phone number to continue.
• The system saves the phone number to the user profile.
• After submitting the phone number, the user is redirected to the Home page and can continue using the application.

### FR-4 OTP Login (Optional)

Users may log in using OTP verification sent to their email or phone.

### FR-5 Forgot Password

Users shall be able to reset forgotten passwords.

Process:

1. User clicks "Forgot Password"
2. User enters email
3. System sends password reset link
4. User sets new password

### FR-6 Logout

Users shall be able to log out of their account securely.

---

# 3.2 User Profile Management

## Description

The profile management page allows users to manage their personal information and delivery addresses from a single interface. The page contains **two tabs**:

1. **User Details Tab** – used to view and update personal information.
2. **Address Management Tab** – used to add, edit, delete, and manage delivery addresses.

## Functional Requirements

### FR-7 View Profile

Users shall be able to view:

• Name
• Email
• Phone number

### FR-8 Edit Profile

Users shall be able to update:

• Name
• Phone number

Email changes may require verification.

### FR-9 Phone Number Management

Users shall be able to add or update phone numbers used for order communication.

---

# 3.3 Delivery Address Management

## Description

Users must be able to manage delivery addresses.

## Functional Requirements

### FR-10 Add Address

Users shall be able to add delivery addresses.

Address fields include:

• Full name
• Phone number
• Street address
• City
• State
• Postal code

### FR-11 Edit Address

Users shall be able to edit saved addresses.

### FR-12 Delete Address

Users shall be able to delete an address.

### FR-13 Set Default Address

Users shall be able to mark one address as the default delivery address.

### FR-14 Select Address During Checkout

Users shall be able to select one of their saved addresses during checkout.

---

# 3.4 Home Page

## Description

The home page displays products and categories to help users discover items.

## Functional Requirements

### FR-15 Featured Products

The system shall display highlighted products on the home page.

### FR-16 New Arrivals

The system shall display recently added products.

### FR-17 Popular Products

The system shall display best selling or popular products.

### FR-18 Product Categories

Users shall be able to browse products by category.

### FR-19 Search Bar

Users shall be able to search products by name or keyword.

---

# 3.5 Product Browsing

## Description

Allows users to explore available products in the store.

## Functional Requirements

### FR-20 Product List

Users shall be able to view a list of products available in the store.

### FR-21 Category Browsing

Users shall be able to filter products based on categories.

### FR-22 Product Search

Users shall be able to search products using keywords.

### FR-23 Product Filters

Users shall be able to filter products using:

• Price
• Category
• Availability

---

# 3.6 Product Details Page

## Description

Displays detailed information about a product.

## Functional Requirements

### FR-24 Product Information

Each product page shall display:

• Product name
• Product description
• Product images
• Product price
• Available stock

### FR-25 Add to Cart

Users shall be able to add the product to the cart.

System behaviour:

• Quantity selection available
• System prevents adding more than available stock

---

# 3.7 Shopping Cart

## Description

The shopping cart temporarily stores selected products.

## Functional Requirements

### FR-26 Add to Cart

Users shall be able to add products to cart.

### FR-27 Update Quantity

Users shall be able to increase or decrease product quantity.

### FR-28 Remove Product

Users shall be able to remove items from cart.

### FR-29 Cart Summary

The cart shall display:

• List of items
• Quantity
• Individual product price
• Total price

---

# 3.8 Checkout Process

## Description

Allows users to review cart items and place an order.

## Functional Requirements

### FR-30 Review Order

Users shall be able to review cart items before placing the order.

### FR-31 Select Delivery Address

Users shall be able to select a saved delivery address.

### FR-32 Payment Method Selection

Users shall be able to select one of the following payment methods:

• Cash on Delivery (COD)
• Online payment via Razorpay

### FR-33 Razorpay Payment

When Razorpay payment is selected:

• The system shall redirect the user to Razorpay payment gateway
• Payment success will confirm the order
• Payment failure will allow retry

### FR-34 Place Order

Users shall be able to confirm and place the order.

System behaviour:

• Generate order ID
• Save order in database
• Send order confirmation email

---

# 3.9 Order Management (User Side)

## Description

Allows users to view and track their orders.

## Functional Requirements

### FR-35 Order History

Users shall be able to view all previously placed orders.

### FR-36 Order Details

Users shall be able to view details of a specific order including:

• Products purchased
• Quantity
• Total price
• Payment method
• Delivery address

### FR-37 Order Tracking

Users shall be able to track the order status.

Possible order statuses include:

• Order placed
• Order confirmed
• Packed
• Out for delivery
• Delivered

---

# 3.10 Notifications

## Description

The system will notify users via email about important order events.

## Functional Requirements

### FR-38 Welcome Email

A welcome email shall be sent after successful user registration.

### FR-39 Order Confirmation Email

An email shall be sent after the user places an order.

### FR-40 Order Status Update Email

Users shall receive email updates when order status changes.

### FR-41 Delivery Notification

Users shall receive an email when the order is marked as delivered.

---

# 4. Future Expansion (Out of Scope)

The following features are planned for future versions:

• Admin dashboard
• Product management system
• Order management panel
• Delivery partner system
• Coupon and discount system
• Push notifications
• AI product recommendations
