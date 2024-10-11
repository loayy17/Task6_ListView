<template>
  <div class="container">
    <h1>ListView Component Usage Guide</h1>

    <!-- Component Overview -->
    <section>
      <h2>1. Component Overview</h2>
      <p>
        The <code>ListView</code> component is a customizable list item
        component that displays an avatar, label, description, and action
        buttons. It accepts props for dynamic configuration, emits events, and
        offers several slots for custom content.
      </p>
    </section>

    <!-- Available Props -->
    <section>
      <h2>2. Available Props</h2>
      <table border="1" cellpadding="10">
        <thead>
          <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>label</code></td>
            <td>String</td>
            <td>The main label for the list item.</td>
            <td><code>'No Label Provided'</code></td>
          </tr>
          <tr>
            <td><code>title</code></td>
            <td>String</td>
            <td>Description or title to be displayed below the label.</td>
            <td><code>'No Title Provided'</code></td>
          </tr>
          <tr>
            <td><code>avatar</code></td>
            <td>Object</td>
            <td>Avatar configuration (image source, shape, size).</td>
            <td>
              <code>{ src: 'default-avatar.png', shape: 0, size: '15%' }</code>
            </td>
          </tr>
          <tr>
            <td><code>isActive</code></td>
            <td>Boolean</td>
            <td>Marks if the list item is active.</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>disabled</code></td>
            <td>Boolean</td>
            <td>Disables the list item if set to true.</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>actionInput</code></td>
            <td>Number</td>
            <td>Type of action button (radio, checkbox, switch, etc.).</td>
            <td><code>ActionsEnum.Radio</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>3.1 Available Action Inputs</h2>
      <pre>
  ActionsEnum = {
    None: 0,      // No Action
    Radio: 1,     // Renders a radio button
    CheckBox: 2,  // Renders a checkbox
    Switch: 3,    // Renders a toggle switch
    Info: 4,      // Renders an info button
    Download: 5   // Renders a download button
  }
        </pre
      >
      <h2>3.2 Available Shape Inputs Of Image</h2>
      <pre>
    ShapeOfImageEnum 
    {
        Circle:0,   //Default
        Square:1,   //Render square border
}
        </pre
      >
    </section>

    <section>
      <h2>4. Emitted Events</h2>
      <p>
        The <code>ListView</code> component emits an
        <code>is-active</code> event when the list item is clicked, passing the
        current <code>isActive</code> state (true/false) back to the parent.
      </p>
    </section>

    <section>
      <h2>5. Slots for Custom Content</h2>
      <table border="1" cellpadding="10">
        <thead>
          <tr>
            <th>Slot Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>image</code></td>
            <td>Slot to insert a custom avatar or image.</td>
          </tr>
          <tr>
            <td><code>label</code></td>
            <td>Slot to customize the label section.</td>
          </tr>
          <tr>
            <td><code>description</code></td>
            <td>Slot to customize the description or title section.</td>
          </tr>
          <tr>
            <td><code>sub-description</code></td>
            <td>Slot to insert extra information below the title.</td>
          </tr>
          <tr>
            <td><code>action</code></td>
            <td>Slot for custom actions (buttons, icons, etc.).</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h1>Understanding the Grouped Lists Structure for ListView</h1>

      <section class="section">
        <h2>1. Overview</h2>
        <p>
          The <code>groupedLists</code> structure is an array of groups, each
          containing multiple list items. Each item is an object that holds
          information like the label, title, avatar, state, and actions. This
          structure is ideal for rendering grouped lists in a ListView
          component.
        </p>
      </section>

      <section class="section">
        <h2>2. Group Structure</h2>
        <p>Each group is represented as an object with two main properties:</p>
        <ul>
          <li><strong>header</strong>: The title or name of the group.</li>
          <li>
            <strong>items</strong>: An array of individual items within the
            group.
          </li>
        </ul>
        <div class="code-block">
          <pre>
const groupedLists = [
  {
    header: "Group 1",   <!-- Group title -->
    items: [             <!-- List of items within the group -->
      {
        label: "Item 1",  <!-- Label for the first item -->
        title: "Description 1",  <!-- Title or subtitle of the item -->
        avatar: {        <!-- Avatar configuration for the item -->
          src: "https://example.com/avatar1.png",  <!-- Avatar image URL -->
          shape: 0,      <!-- Shape of the avatar: 0 for square, 1 for circular -->
          size: "10%"     <!-- Size of the avatar -->
        },
        isActive: false, <!-- Active state: true if active, false otherwise -->
        actionInput: 1,  <!-- Defines the type of action input (e.g., radio, checkbox) -->
      },
      {
        label: "Item 2",
        title: "Description 2",
        avatar: {
          src: "https://example.com/avatar2.png",
          shape: 0,
          size: "10%"
        },
        isActive: true,
        actionInput: 3,
      }
    ]
  }
];
      </pre>
        </div>
      </section>

      <section class="section">
        <h2>3. Item Structure</h2>
        <p>
          Each item within a group is represented as an object with the
          following properties:
        </p>
        <ul>
          <li>
            <strong>label</strong>: The main label of the item, typically
            displayed as the title in the list.
          </li>
          <li>
            <strong>title</strong>: A secondary title or description displayed
            beneath the label.
          </li>
          <li>
            <strong>avatar</strong>: An object that defines the avatar image,
            its shape, and size.
          </li>
          <li>
            <strong>isActive</strong>: A boolean indicating whether the item is
            currently active.
          </li>
          <li>
            <strong>actionInput</strong>: A number that defines the action type
            (e.g., radio button, checkbox, etc.).
          </li>
        </ul>
        <p>
          <strong>Avatar Configuration:</strong> The avatar is represented as an
          object with the following properties:
        </p>
        <ul>
          <li>
            <strong>src</strong>: The URL of the image to be used as the avatar.
          </li>
          <li>
            <strong>shape</strong>: Defines the shape of the avatar (e.g., 0 for
            square, 1 for circle).
          </li>
          <li>
            <strong>size</strong>: The size of the avatar, usually defined as a
            percentage.
          </li>
        </ul>
        <div class="code-block">
          <pre>
{
  label: "Item 1",
  title: "Description 1",
  avatar: {
    src: "https://example.com/avatar.png",
    shape: 0,          <!-- 0 for square, 1 for circular -->
    size: "10%"        <!-- Size of the avatar -->
  },
  isActive: false,    <!-- Boolean to define if the item is active -->
  actionInput: 1      <!-- Defines the type of input, e.g., 1 for radio button -->
}
      </pre>
        </div>
      </section>

      <section class="section">
        <h2>4. Action Input Types</h2>
        <p>
          The <code>actionInput</code> property defines the type of input or
          action that the list item provides. Here are the available options:
        </p>
        <ul>
          <li>
            <strong>1 (Radio)</strong>: Renders a radio button for the item.
          </li>
          <li>
            <strong>2 (Checkbox)</strong>: Renders a checkbox for the item.
          </li>
          <li>
            <strong>3 (Switch)</strong>: Renders a toggle switch for the item.
          </li>
          <li>
            <strong>4 (Info)</strong>: Renders an info button for the item.
          </li>
          <li>
            <strong>5 (Download)</strong>: Renders a download button for the
            item.
          </li>
        </ul>
        <div class="code-block">
          <pre>
            actionInput: 1  <!-- Radio button -->
            actionInput: 2  <!-- Checkbox -->
            actionInput: 3  <!-- Switch -->
            actionInput: 4  <!-- Info button -->
            actionInput: 5  <!-- Download button -->
      </pre>
        </div>
      </section>

      <section class="section">
        <h2>5. Example of Grouped List</h2>
        <p>
          Here’s an example of how you can structure a complete list with
          multiple groups, each containing a few items:
        </p>
        <div class="code-block">
          <pre>
const groupedLists = [
  {
    header: "Group 1",
    items: [
      {
        label: "Item 1",
        title: "Description 1",
        avatar: {
          src: "https://example.com/avatar1.png",
          shape: 0,
          size: "10%"
        },
        isActive: false,
        actionInput: 1
      },
      {
        label: "Item 2",
        title: "Description 2",
        avatar: {
          src: "https://example.com/avatar2.png",
          shape: 0,
          size: "10%"
        },
        isActive: true,
        actionInput: 3
      }
    ]
  },
  {
    header: "Group 2",
    items: [
      {
        label: "Item 3",
        title: "Description 3",
        avatar: {
          src: "https://example.com/avatar3.png",
          shape: 1,
          size: "5%"
        },
        isActive: false,
        actionInput: 2
      },
      {
        label: "Item 4",
        title: "Description 4",
        avatar: {
          src: "https://example.com/avatar4.png",
          shape: 0,
          size: "2%"
        },
        isActive: true,
        actionInput: 4
      }
    ]
  }
];
      </pre
          >
        </div>
      </section>
    </section>
    <!-- Example Usages -->
    <section>
      <h2>Example Usages</h2>

      <!-- Basic Example -->
      <h3>Basic Default</h3>
      <list-view />

      <!-- Custom Slots Example -->
      <h3>Example with Custom Slots and Default Img</h3>
      <list-view
        :isActive="false"
        :label="'Custom Label'"
        @is-active="handleActive(0, 0)"
      >
        <template #image="{ avatar }">
          <img
            :src="avatar.src"
            style="border-radius: 50%; width: 10%"
            alt="Custom Avatar"
          />
        </template>
        <template #label>
          <h5>{{ "My Custom Label" }}</h5>
        </template>
        <template #description>
          <p>{{ "This is a custom description for the item." }}</p>
        </template>
        <template #action>
          <button class="btn btn-primary">Custom Action</button>
        </template>
      </list-view>

      <!-- Disabled Item Example -->
      <h3>Example: Disabled List Item</h3>
      <list-view
        :label="'Disabled Item'"
        :title="'This item is disabled.'"
        :disabled="true"
        :actionInput="2"
      />
    </section>

    <!-- Multi-Item Example -->
    <section>
      <h2>7. Multi-Item Example with Grouping</h2>
      <div
        v-for="(group, gIndex) in groupedLists"
        :key="gIndex"
        :class="'list-group1' + gIndex"
      >
        <h3 class="bg-body-secondary p-2">{{ group.header }}</h3>
        <list-view
          v-for="(list, lIndex) in group.items"
          :key="lIndex"
          :marker="list.has_border_left"
          :Label="list.label"
          :border="list.has_border"
          :actionInput="list.actionInput"
          :disabled="list.disabled"
          :avatar="list.avatar"
          :isActive="list.isActive"
          @is-active="handleGroupItemActive(gIndex, lIndex)"
        >
          <div>{{ list.isActive }}</div>
          <template v-if="group.header" #header>
            <div class="bg-body-secondary p-2">{{ group.header }}</div>
          </template>
          <template #image="{ img }" v-if="list.avatar"></template>
          <template #Label="{ Label }">
            {{ list.label }}
          </template>
          <template v-if="list.Title" #description>
            <div>{{ list.Title }}</div>
          </template>

          <template v-if="list.Subtitle" #sub-description>
            <div>{{ list.Subtitle }}</div>
          </template>

          <template v-if="list.Date" #Date>
            <div>{{ list.Date }}</div>
          </template>

          <template #action> </template
        ></list-view>
      </div>
    </section>
    <section>
      <div>
        <br />
        <div class="m-5 border border-1 ActiveList">
          <div
            v-for="(group, gIndex) in lists"
            :key="gIndex"
            :class="'list-group2' + gIndex"
          >
            <div v-if="group.header" class="bg-body-secondary p-2">
              {{ group.header }}
            </div>

            <list-view
              v-for="(list, lIndex) in group.listItems"
              :key="lIndex"
              :marker="list.has_border_left"
              :Label="list.label"
              :border="list.has_border"
              :actionInput="2"
              :disabled="list.disabled"
              :avatar="list.avatar"
              :isActive="list.isActive"
              @is-active="ToggleEvent(gIndex, lIndex)"
            >
              <div>{{ list.isActive }}</div>
              <template v-if="group.header" #header>
                <div class="bg-body-secondary p-2">{{ group.header }}</div>
              </template>
              <template #image="{ img }" v-if="list.avatar"> </template>
              <template #Label="{ Label }">
                {{ list.label }}
              </template>
              <template v-if="list.Title" #description>
                <div>{{ list.Title }}</div>
              </template>

              <template v-if="list.Subtitle" #sub-description>
                <div>{{ list.Subtitle }}</div>
              </template>

              <template v-if="list.Date" #Date>
                <div>{{ list.Date }}</div>
              </template>

              <template #action> </template>
            </list-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ListView from "./components/ListView.vue";

// Variables
const groupedLists = [
  {
    header: "Group 1",
    items: [
      {
        label: "Item 1",
        title: "Description 1",
        avatar: {
          src: "https://th.bing.com/th/id/OIP.AbGafkazjc_S1pZPh0B9cQHaIm?rs=1&pid=ImgDetMain",
          shape: 0,
          size: "10%",
        },
        isActive: false,
        actionInput: 1,
      },
      {
        label: "Item 2",
        title: "Description 2",
        avatar: {
          src: "https://th.bing.com/th/id/OIP.AbGafkazjc_S1pZPh0B9cQHaIm?rs=1&pid=ImgDetMain",
          shape: 0,
          size: "10%",
        },
        isActive: true,
        actionInput: 3,
      },
    ],
  },
  {
    header: "Group 2",
    items: [
      {
        label: "Item 3",
        title: "Description 3",
        avatar: {
          src: "https://th.bing.com/th/id/OIP.Sw0g2adwtwCJAbIAveYGbgHaHa?rs=1&pid=ImgDetMain",
          shape: 1,
          size: "5%",
        },
        isActive: false,
        actionInput: 2,
      },
      {
        label: "Item 4",
        title: "Description 4",
        avatar: {
          src: "https://shared.prolewiki.org/uploads/thumb/3/30/Book_icon.svg/1200px-Book_icon.svg.png",
          shape: 0,
          size: "12%",
        },
        isActive: true,
        actionInput: 4,
      },
    ],
  },
];
let lists = [
  {
    header: "",
    listItems: [
      {
        border_left: "Primary",
        label: "Item 1 in Group 1",
        has_border: false,
        isctive: false,
        disabled: true,
        Title: "Title for Item 1",
        Subtitle: "This is a subtitle",
        Date: "01/01/2022",
        avatar: {
          src: "https://th.bing.com/th/id/OIP.AbGafkazjc_S1pZPh0B9cQHaIm?rs=1&pid=ImgDetMain",
          shape: 0,
          size: "10%",
        },
      },
      {
        has_border_left: "Danger",
        label: "Item 2 in Group 1",
        has_border: false,
        isActive: true,
        disabled: false,
        Title: "Title for Item 2",
        Subtitle: "Another subtitle here",
        Date: "02/02/2022",
        avatar: {
          src: "https://th.bing.com/th/id/OIP.AbGafkazjc_S1pZPh0B9cQHaIm?rs=1&pid=ImgDetMain",
          shape: 0,
          size: "15%",
        },
      },
    ],
  },
  {
    header: "Group 2",
    listItems: [
      {
        label: "loay",
        has_border_left: "Success",
        has_border: true,
        isActive: true,
        disabled: false,
        Subtitle: "This item was successful",
        Date: "03/03/2022",
      },
      {
        has_border_left: "Warning",
        label: "Item 2 in Group 2",
        has_border: true,
        isActive: false,
        Title: "Warning Item",
        Subtitle: "Be cautious with this one",
        Date: "04/04/2022",
        avatar: {},
      },
      {
        has_border_left: "Info",
        label: "Item 3 in Group 2",
        has_border: true,
        isActive: false,
        Title: "Informative Item",
        Subtitle: "This item contains useful information",
        Date: "05/05/2022",
      },
    ],
  },
];

// Methods
// active toggle for groupedLists
const handleGroupItemActive = (gIndex, lIndex) => {
  groupedLists[gIndex].items[lIndex].isActive = true;
  let groubList = document.querySelector(`.list-group1${gIndex}`);
  groubList
    ?.querySelectorAll(".list-active-item")
    .forEach((el) => el.classList.remove("list-active-item"));
  groubList
    ?.querySelectorAll(".list-group-item")
    [lIndex].classList.add("list-active-item");
};
// active toggle for lists
const ToggleEvent = (gIndex, lIndex) => {
  lists[gIndex].listItems[lIndex].isActive = true;
  let groubList = document.querySelector(`.list-group2${gIndex}`);
  groubList
    ?.querySelectorAll(".list-active-item")
    .forEach((el) => el.classList.remove("list-active-item"));
  groubList
    ?.querySelectorAll(".list-group-item")
    [lIndex].classList.add("list-active-item");
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
table {
  width: 100%;
  margin-bottom: 20px;
}
.list-group {
  margin-bottom: 20px;
}
.list-active-item {
  background-color: aqua !important;
  border-color: rgb(0, 81, 255) !important;
}
.list-active-item :hover {
  background-color: rgba(0, 255, 255, 0.715) !important;
  border-color: rgb(0, 81, 255) !important;
}
.code-block {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  font-family: monospace;
}
.section {
  margin-bottom: 20px;
}
</style>
