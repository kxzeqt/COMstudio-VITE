<!--
  Contact Form Component
  A stylish form for receiving inquiries and messages from visitors
  Includes client-side validation and success/error states
-->
<template>
  <div class="contact-form">
    <form
      @submit.prevent="submitForm"
      ref="form"
      :class="{ 'form-submitted': submitted }"
    >
      <div class="form-group">
        <label for="name">Name <span class="required">*</span></label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          :class="{ 'input-error': errors.name }"
          @blur="validateField('name')"
        />
        <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
      </div>

      <div class="form-group">
        <label for="email">Email <span class="required">*</span></label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          :class="{ 'input-error': errors.email }"
          @blur="validateField('email')"
        />
        <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
      </div>

      <div class="form-group">
        <label for="subject">Subject <span class="required">*</span></label>
        <select
          id="subject"
          v-model="formData.subject"
          :class="{ 'input-error': errors.subject }"
          @blur="validateField('subject')"
        >
          <option value="" disabled selected>Please select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Project Collaboration">Project Collaboration</option>
          <option value="Job Application">Job Application</option>
          <option value="Media Request">Media Request</option>
          <option value="Other">Other</option>
        </select>
        <p v-if="errors.subject" class="error-message">{{ errors.subject }}</p>
      </div>

      <div class="form-group">
        <label for="message">Message <span class="required">*</span></label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="5"
          :class="{ 'input-error': errors.message }"
          @blur="validateField('message')"
        ></textarea>
        <p v-if="errors.message" class="error-message">{{ errors.message }}</p>
      </div>

      <div class="form-actions">
        <button type="submit" class="submit-button" :disabled="submitting">
          <span v-if="submitting">Sending...</span>
          <span v-else>Send Message</span>
        </button>
      </div>

      <div v-if="formSuccess" class="success-message">
        <div class="success-icon">✓</div>
        <h3>Message Sent Successfully!</h3>
        <p>
          Thank you for contacting us. We'll get back to you as soon as
          possible.
        </p>
      </div>

      <div v-if="formError" class="error-box">
        <h3>Submission Error</h3>
        <p>{{ formError }}</p>
        <button @click="formError = null" class="error-close">Try Again</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// Form data
const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

// Form state
const errors = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitting = ref(false);
const submitted = ref(false);
const formSuccess = ref(false);
const formError = ref(null);
const form = ref(null);

// Validation functions
function validateField(field) {
  errors[field] = "";

  switch (field) {
    case "name":
      if (!formData.name.trim()) {
        errors.name = "Name is required";
      } else if (formData.name.length < 2) {
        errors.name = "Name must be at least 2 characters";
      }
      break;

    case "email":
      if (!formData.email.trim()) {
        errors.email = "Email is required";
      } else if (!isValidEmail(formData.email)) {
        errors.email = "Please enter a valid email address";
      }
      break;

    case "subject":
      if (!formData.subject) {
        errors.subject = "Please select a subject";
      }
      break;

    case "message":
      if (!formData.message.trim()) {
        errors.message = "Message is required";
      } else if (formData.message.length < 10) {
        errors.message = "Message must be at least 10 characters";
      }
      break;
  }

  return !errors[field];
}

function validateForm() {
  let isValid = true;

  // Validate each field
  isValid = validateField("name") && isValid;
  isValid = validateField("email") && isValid;
  isValid = validateField("subject") && isValid;
  isValid = validateField("message") && isValid;

  return isValid;
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Form submission
async function submitForm() {
  if (!validateForm()) {
    return;
  }

  submitting.value = true;

  try {
    // This would be replaced with your actual form submission logic
    // Example with fetch API:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Handle success
    submitted.value = true;
    formSuccess.value = true;

    // Reset form
    Object.keys(formData).forEach((key) => {
      formData[key] = "";
    });
  } catch (error) {
    // Handle error
    formError.value =
      "There was a problem sending your message. Please try again.";
    console.error("Form submission error:", error);
  } finally {
    submitting.value = false;
  }
}
</script>

<style scoped>
.contact-form {
  margin: 2rem 0;
  color: var(--vp-c-text-1);
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.form-submitted {
  opacity: 0.6;
  pointer-events: none;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.required {
  color: var(--vp-c-danger);
}

input,
select,
textarea {
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.375rem;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-base);
  transition: all 0.3s ease;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px rgba(var(--vp-c-brand-rgb), 0.1);
}

.input-error {
  border-color: var(--vp-c-danger) !important;
}

.error-message {
  font-size: 0.875rem;
  color: var(--vp-c-danger);
  margin-top: 0.25rem;
}

.form-actions {
  margin-top: 1rem;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;
}

.submit-button:hover:not(:disabled) {
  background-color: var(--vp-c-brand-dark);
  transform: translateY(-2px);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message,
.error-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--vp-c-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  border-radius: 0.5rem;
  animation: fadeIn 0.5s ease forwards;
}

.success-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: var(--vp-c-green);
  color: white;
  border-radius: 50%;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.success-message h3,
.error-box h3 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.error-box {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-danger);
}

.error-close {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .contact-form {
    padding: 0 1rem;
  }

  .submit-button {
    width: 100%;
  }
}
</style>
