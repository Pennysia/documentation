---
title: Contact
description: Official Pennysia links, support channels, and team.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Contact

## Official links

<OfficialLinks />

## Support

- **Email:** formal inquiries and partnerships ([inbox below](#inquiry))
- **[Discord](https://discord.gg/G7rxGgZhXa):** community support and developer chat
- **[Request form](https://docs.google.com/forms/d/e/1FAIpQLScnudg5yaAFL1ZOz28co1CJ202a3k2ntr3LhLa-rCohBQIorg/viewform):** feedback and feature requests

## Inquiry

| Context | Email |
| --- | --- |
| General | [hello@pennysia.com](mailto:hello@pennysia.com) |
| Dev/Technical | [dev@pennysia.com](mailto:dev@pennysia.com) |
| Finance | [finance@pennysia.com](mailto:finance@pennysia.com) |
| Legal | [legal@pennysia.com](mailto:legal@pennysia.com) |

## Team

<div class="team-grid">
  <a href="https://x.com/SetteeCh" target="_blank" rel="noopener noreferrer" class="team-card">
    <img src="https://unavatar.io/x/SetteeCh" alt="SetteeCh" class="team-avatar" />
    <span class="team-handle">@SetteeCh</span>
  </a>
  <a href="https://x.com/ThanapolJao" target="_blank" rel="noopener noreferrer" class="team-card">
    <img src="https://unavatar.io/x/ThanapolJao" alt="ThanapolJao" class="team-avatar" />
    <span class="team-handle">@ThanapolJao</span>
  </a>
  <a href="https://x.com/Sutach_Pennysia" target="_blank" rel="noopener noreferrer" class="team-card">
    <img src="https://unavatar.io/x/Sutach_Pennysia" alt="Sutach_Pennysia" class="team-avatar" />
    <span class="team-handle">@Sutach_Pennysia</span>
  </a>
  <a href="https://x.com/ImmuTiaras" target="_blank" rel="noopener noreferrer" class="team-card">
    <img src="https://unavatar.io/x/ImmuTiaras" alt="ImmuTiaras" class="team-avatar" />
    <span class="team-handle">@ImmuTiaras</span>
  </a>
</div>

<style>
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

.team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.team-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.team-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.team-handle {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}
</style>
