# Moving the U.S. Government Towards Zero Trust Cybersecurity Principles

The [Office of Management and Budget](https://www.whitehouse.gov/omb/) (OMB) and the [Cybersecurity and Infrastructure Security Agency](https://cisa.gov) (CISA) are **seeking public feedback** on strategic and technical guidance documents meant to **move the U.S. government towards a zero trust architecture**.

This repository powers the website at https://zerotrust.cyber.gov. This website is currently oriented around 3 documents:

* OMB's **[Federal Zero Trust Strategy](https://zerotrust.cyber.gov/federal-zero-trust-strategy/)**. The goal of this strategy is to accelerate agencies towards a shared baseline of early zero trust maturity.

* CISA's **[Zero Trust Maturity Model](https://zerotrust.cyber.gov/zero-trust-maturity-model/)**. The maturity model complements OMB's Federal Zero Trust Strategy, and is designed to provide agencies with a roadmap and resources to achieve an optimal zero trust environment.

* CISA's **[Cloud Security Technical Reference Architecture](https://zerotrust.cyber.gov/cloud-security-technical-reference-architecture)**, a guide for agencies to leverage when migrating to the cloud securely. The document explains considerations for shared services, cloud migration, and cloud security posture management.

The Federal Zero Trust Strategy is rendered in full web format in this website. CISA's documents above currently have landing pages with public comment instructions on this site, while their actual documents are hosted on [cisa.gov](https://cisa.gov).

## How to comment

OMB is accepting public comment on the Federal Zero Trust Strategy through **September 21, 2021**. To submit a comment, send it by email to **[zerotrust@omb.eop.gov](mailto:zerotrust@omb.eop.gov?subject=[Public%20comment]%20)**.

CISA is accepting public comment on the Zero Trust Maturity Model and the Cloud TRA through **October 1, 2021**. To submit a comment on either document, send it by email to **[tic@cisa.dhs.gov](mailto:tic@cisa.dhs.gov)**.

## About the website

From here on out are **technical details about the website itself**, not the substance of the policy documents and reference material herein.

This website would not be possible without the **[U.S. Web Design System](https://designsystem.digital.gov)**, which made it easy and fast to get a simple and clean website going.

This repository was originally copied from the [`18f/federalist-uswds-jekyll`](https://github.com/18F/federalist-uswds-jekyll) template, which is optimized for [Jekyll](https://jekyllrb.com) sites that use the U.S. Web Design System and run on [Federalist](https://federalist.18f.gov) (a Jekyll-based static site host for government services).

For anyone analyzing this site as a potential role model: this site is currently hosted on GitHub Pages, and so plugins which work on Federalist but do not work on GitHub Pages were removed from the project. This necessitated a kludgey overhaul of the asset pipeline and some duplication of assets.

